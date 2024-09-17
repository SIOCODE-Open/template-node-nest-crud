import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";

import { ManufacturerEntity as ManufacturerManufacturerEntity } from "../manufacturer/manufacturer.entity";

/** A product in the system */
@Entity()
export class ProductEntity {
    /** The unique identifier for the entity */
    @PrimaryColumn()
    id: string;

    /** The name of the product */
    @Column({ type: "varchar" })
    name: string;

    /** The description of the product, supports Markdown */
    @Column({ type: "varchar" })
    description: string;

    /** The manufacturer of the product */
    @ManyToOne(() => ManufacturerManufacturerEntity)
    manufacturer: ManufacturerManufacturerEntity;
}
