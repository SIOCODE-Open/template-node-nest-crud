import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";

/** A manufacturer of products */
@Entity()
export class ManufacturerEntity {
    /** The unique identifier for the entity */
    @PrimaryColumn()
    id: string;

    /** The name of the manufacturer */
    @Column({ type: "varchar" })
    name: string;

    /** The description of the manufacturer, supports Markdown */
    @Column({ type: "varchar" })
    description: string;

    /** The URL of the manufacturer's website */
    @Column({ type: "varchar" })
    website: string;
}
