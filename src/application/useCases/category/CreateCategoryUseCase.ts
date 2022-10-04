import { CreateCategoryDTO } from "../../dtos/CategoryDTO";
import ICategoryRepository from "../../repositories/ICategoryRepository";
import CategoryValidator from "../../validators/CategoryValidator";

export default class CreateCategoryUseCase {
    private categoryValidator: CategoryValidator;

    constructor(
        private readonly categoryRepository: ICategoryRepository
    ) {
        this.categoryValidator = new CategoryValidator(this.categoryRepository);
    }

    excute({ name, description }: CreateCategoryDTO): void {
        if(this.categoryValidator.isThereCategoryByName(name)) throw new Error("Already exists category name");

        this.categoryRepository.create({ name, description });
    }
}