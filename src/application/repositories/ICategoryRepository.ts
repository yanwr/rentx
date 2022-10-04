import { CreateCategoryDTO } from "../dtos/CategoryDTO";
import Category from "../entities/Category";

export default interface ICategoryRepository {
    create({ name, description }: CreateCategoryDTO): void;
    findAll(): Category[];
    findByName(name: string): Category | undefined;
}