import { CreateSpecificationDTO } from "../../dtos/SpecificationDTO";
import ISpecificationRepository from "../../repositories/ISpecificationRepository";
import SpecificationValidator from "../../validators/SpecificationValidator";

export default class CreateSpecificationUseCase {
    private specificationValidator: SpecificationValidator;

    constructor(
        private specificationRepository: ISpecificationRepository
    ) {
        this.specificationValidator = new SpecificationValidator(this.specificationRepository);
    }

    excute({ name, description }: CreateSpecificationDTO): void {
        if(this.specificationValidator.isThereSpecificationByName(name)) {
            throw new Error("Already exists specification name");
        }

        this.specificationRepository.create({ name, description });
    }
}