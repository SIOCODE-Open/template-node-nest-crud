import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ProductEntity } from "./product.entity";

import { ManufacturerEntity as ManufacturerManufacturerEntity } from "../manufacturer/manufacturer.entity";

/** A product in the system */
export interface IProduct {
    id: string;
    /** The name of the product */
    name: string;
    /** The description of the product, supports Markdown */
    description: string;
    /** The manufacturer of the product */
    manufacturer: string;
}

/** Create DTO for Product entities */
export interface INewProduct {
    /** The name of the product */
    name: string;
    /** The description of the product, supports Markdown */
    description: string;
    /** The manufacturer of the product */
    manufacturer: string;
}

// TODO: List
// TODO: Create
// TODO: Update per attr
// TODO: Clear per attr
// TODO: Update per assoc
// TODO: Clear per assoc

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
        @InjectRepository(ManufacturerManufacturerEntity)
        private manufacturerManufacturerRepository: Repository<ManufacturerManufacturerEntity>
    ) {}

    async listAll(): Promise<IProduct[]> {
        const entities = await this.productRepository.find();
        return entities.map((entity) => ({
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        }));
    }

    async getById(id: string): Promise<IProduct | null> {
        const entity = await this.productRepository.findOneBy({ id });
        if (!entity) {
            return null;
        }
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }

    async create(newEntity: INewProduct): Promise<IProduct> {
        const entity = {
            id: `${Date.now()}-${Math.random()}`,
            name: newEntity.name,
            description: newEntity.description,
            manufacturer:
                await this.manufacturerManufacturerRepository.findOneBy({
                    id: newEntity.manufacturer,
                }),
        };
        await this.productRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }

    async updateName(id: string, name: string): Promise<IProduct> {
        const entity = await this.productRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.name = name;
        await this.productRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }

    async clearName(id: string): Promise<IProduct> {
        const entity = await this.productRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.name = null;
        await this.productRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }
    async updateDescription(
        id: string,
        description: string
    ): Promise<IProduct> {
        const entity = await this.productRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.description = description;
        await this.productRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }

    async clearDescription(id: string): Promise<IProduct> {
        const entity = await this.productRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.description = null;
        await this.productRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }

    async updateManufacturer(
        id: string,
        manufacturerId: string
    ): Promise<IProduct> {
        const entity = await this.productRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.manufacturer =
            await this.manufacturerManufacturerRepository.findOneBy({
                id: manufacturerId,
            });
        await this.productRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }

    async clearManufacturer(id: string): Promise<IProduct> {
        const entity = await this.productRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.manufacturer = null;
        await this.productRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            manufacturer: entity.manufacturer.id,
        };
    }

    async deleteById(id: string): Promise<void> {
        await this.productRepository.delete({ id });
    }
}
