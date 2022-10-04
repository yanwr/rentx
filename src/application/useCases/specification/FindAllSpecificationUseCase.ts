import Specification from "../../entities/Specification";
import ISpecificationRepository from "../../repositories/ISpecificationRepository";

export default class FindAllSpecificationUseCase {
    constructor(
        private readonly specificationRepository: ISpecificationRepository
    ) {}

    excute(): Specification[] {
        return this.specificationRepository.findAll();
    }
}