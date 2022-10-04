import { CreateSpecificationDTO } from "../../../application/dtos/SpecificationDTO";
import Specification from "../../../application/entities/Specification";
import ISpecificationRepository from "../../../application/repositories/ISpecificationRepository";

export default class SpecificationRepository implements ISpecificationRepository {
    private static INSTANCE: SpecificationRepository;

    private specifications: Specification[];

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationRepository {
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    create({ name, description }: CreateSpecificationDTO): void {
        const specification = new Specification(name, description);
        this.specifications.push(specification);
    }

    findAll(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(s => s.name === name);
        return specification;
    }
}