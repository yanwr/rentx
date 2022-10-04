import ISpecificationRepository from "../repositories/ISpecificationRepository";

export default class SpecificationValidator {
    constructor(
        private readonly specificationRepository: ISpecificationRepository
    ) {}

	isThereSpecificationByName(name: string): boolean {
        const specification = this.specificationRepository.findByName(name);
        return specification ? true : false
    }
}