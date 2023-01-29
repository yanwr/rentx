import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("specifications")
export default class Specification {
    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255 })
    description: string;
    
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    constructor(name:string, description:string) {
        this.id = uuidV4();
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
    }
}