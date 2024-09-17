import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ManufacturerEntity } from "./manufacturer.entity";
import { ManufacturerController } from "./manufacturer.controller";
import { ManufacturerService } from "./manufacturer.service";

@Module({
    imports: [TypeOrmModule.forFeature([ManufacturerEntity])],
    providers: [ManufacturerService],
    controllers: [ManufacturerController],
})
export class ManufacturerModule {}
