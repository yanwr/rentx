import Category from "../../entities/Category";
import ICategoryRepository from "../../repositories/ICategoryRepository";

export default class FindAllCategoryUseCase {
    constructor(
        private readonly categoryRepository: ICategoryRepository
    ) {}

    excute(): Category[] {
        return this.categoryRepository.findAll();
    }
}