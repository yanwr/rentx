import CategoryRepository from "../../../../infrastructure/repositories/category/CategoryRepository";
import CreateCategoryController from "../../category/CreateCategoryController";
import CreateCategoryFromFileController from "../../category/CreateCategoryFromFileController";
import FindAllCategoryController from "../../category/FindAllCategoryController";

import CreateCategoryFromFileUseCase from "../../../../application/useCases/category/CreateCategoryFromFileUseCase";
import CreateCategoryUseCase from "../../../../application/useCases/category/CreateCategoryUseCase";
import FindAllCategoryUseCase from "../../../../application/useCases/category/FindAllCategoryUseCase";

class CategoryControllerCreator {
    private readonly categoriesRepository: CategoryRepository;

    constructor() {
        this.categoriesRepository = CategoryRepository.getInstance();
    }

    get createCategoryController() {
        return new CreateCategoryController(new CreateCategoryUseCase(this.categoriesRepository));
    }
    get findAllCategoryController() {
        return new FindAllCategoryController(new FindAllCategoryUseCase(this.categoriesRepository));
    }
    get createCategoryFromFileController() {
        return new CreateCategoryFromFileController(new CreateCategoryFromFileUseCase(this.categoriesRepository));
    }
}

export default new CategoryControllerCreator();