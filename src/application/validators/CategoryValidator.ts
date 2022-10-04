import ICategoryRepository from "../repositories/ICategoryRepository";

export default class CategoryValidator {
    constructor(
        private readonly categoryRepository: ICategoryRepository
    ) {}

	isThereCategoryByName(name: string): boolean {
        const category = this.categoryRepository.findByName(name);
        return category ? true : false
    }
}