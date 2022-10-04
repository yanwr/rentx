import { v4 as uuidV4 } from "uuid";

export default class Specification {
    id: string;
    name: string;
    description: string;
    createdAt: Date;

    constructor(name:string, description:string) {
        this.id = uuidV4();
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
    }
}