import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ProductEntity } from "./product.entity";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

import { ManufacturerEntity as ManufacturerManufacturerEntity } from "../manufacturer/manufacturer.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProductEntity,
            ManufacturerManufacturerEntity,
        ]),
    ],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule {}
