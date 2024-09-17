import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ProductEntity } from "./product/product.entity";
import { ProductModule } from "./product/product.module";
import { ManufacturerEntity } from "./manufacturer/manufacturer.entity";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.BACKEND_DB_HOST || "localhost",
            port: parseInt(process.env.BACKEND_DB_PORT || "5432", 10),
            username: process.env.BACKEND_DB_USER || "postgres",
            password: process.env.BACKEND_DB_PASSWORD || "postgres",
            database: process.env.BACKEND_DB_NAME || "backend",
            entities: [ProductEntity, ManufacturerEntity],
            synchronize: true,
        }),
        ProductModule,
        ManufacturerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
