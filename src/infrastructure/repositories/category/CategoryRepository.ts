import { CreateCategoryDTO } from "../../../application/dtos/CategoryDTO";
import Category from "../../../application/entities/Category";
import ICategoryRepository from "../../../application/repositories/ICategoryRepository";

export default class CategoryRepository implements ICategoryRepository {
    private static INSTANCE: CategoryRepository;

    private categories: Category[];

    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoryRepository {
        if(!CategoryRepository.INSTANCE){
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    }

    create({ description, name }: CreateCategoryDTO): void {
        const category = new Category(name, description);
        this.categories.push(category);
    }

    findAll(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find(c => c.name === name);
        return category;
    }
}