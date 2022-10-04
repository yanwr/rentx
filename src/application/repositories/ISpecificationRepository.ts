import { CreateSpecificationDTO } from "../dtos/SpecificationDTO";
import Specification from "../entities/Specification";

export default interface ISpecificationRepository {
    create({ name, description }: CreateSpecificationDTO): void;
    findAll(): Specification[];
    findByName(name: string): Specification | undefined;
}