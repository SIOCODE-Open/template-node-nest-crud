import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ManufacturerEntity } from "./manufacturer.entity";

/** A manufacturer of products */
export interface IManufacturer {
    id: string;
    /** The name of the manufacturer */
    name: string;
    /** The description of the manufacturer, supports Markdown */
    description: string;
    /** The URL of the manufacturer's website */
    website: string;
}

/** Create DTO for Manufacturer entities */
export interface INewManufacturer {
    /** The name of the manufacturer */
    name: string;
    /** The description of the manufacturer, supports Markdown */
    description: string;
    /** The URL of the manufacturer's website */
    website: string;
}

// TODO: List
// TODO: Create
// TODO: Update per attr
// TODO: Clear per attr
// TODO: Update per assoc
// TODO: Clear per assoc

@Injectable()
export class ManufacturerService {
    constructor(
        @InjectRepository(ManufacturerEntity)
        private manufacturerRepository: Repository<ManufacturerEntity>
    ) {}

    async listAll(): Promise<IManufacturer[]> {
        const entities = await this.manufacturerRepository.find();
        return entities.map((entity) => ({
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        }));
    }

    async getById(id: string): Promise<IManufacturer | null> {
        const entity = await this.manufacturerRepository.findOneBy({ id });
        if (!entity) {
            return null;
        }
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }

    async create(newEntity: INewManufacturer): Promise<IManufacturer> {
        const entity = {
            id: `${Date.now()}-${Math.random()}`,
            name: newEntity.name,
            description: newEntity.description,
            website: newEntity.website,
        };
        await this.manufacturerRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }

    async updateName(id: string, name: string): Promise<IManufacturer> {
        const entity = await this.manufacturerRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.name = name;
        await this.manufacturerRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }

    async clearName(id: string): Promise<IManufacturer> {
        const entity = await this.manufacturerRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.name = null;
        await this.manufacturerRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }
    async updateDescription(
        id: string,
        description: string
    ): Promise<IManufacturer> {
        const entity = await this.manufacturerRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.description = description;
        await this.manufacturerRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }

    async clearDescription(id: string): Promise<IManufacturer> {
        const entity = await this.manufacturerRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.description = null;
        await this.manufacturerRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }
    async updateWebsite(id: string, website: string): Promise<IManufacturer> {
        const entity = await this.manufacturerRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.website = website;
        await this.manufacturerRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }

    async clearWebsite(id: string): Promise<IManufacturer> {
        const entity = await this.manufacturerRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`No entity found with id ${id}`);
        }
        entity.website = null;
        await this.manufacturerRepository.save(entity);
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            website: entity.website,
        };
    }

    async deleteById(id: string): Promise<void> {
        await this.manufacturerRepository.delete({ id });
    }
}
