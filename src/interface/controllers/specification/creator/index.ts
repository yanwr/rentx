import SpecificationRepository from "../../../../infrastructure/repositories/specification/SpecificationRepository";
import CreateSpecificationController from "../../specification/CreateSpecificationController";
import FindAllSpecificationController from "../../specification/FindAllSpecificationController";

import CreateSpecificationUseCase from "../../../../application/useCases/specification/CreateSpecificationUseCase";
import FindAllSpecificationUseCase from "../../../../application/useCases/specification/FindAllSpecificationUseCase";

class SpecificationControllerCreator {
    private readonly specificationRepository: SpecificationRepository;

    constructor() {
        this.specificationRepository = SpecificationRepository.getInstance();
    }

    get createSpecificationController() {
        return new CreateSpecificationController(new CreateSpecificationUseCase(this.specificationRepository));
    }
    get findAllSpecificationController() {
        return new FindAllSpecificationController(new FindAllSpecificationUseCase(this.specificationRepository));
    }
}

export default new SpecificationControllerCreator();