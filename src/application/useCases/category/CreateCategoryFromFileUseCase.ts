import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { CreateCategoryDTO } from "../../dtos/CategoryDTO";
import ICategoryRepository from "../../repositories/ICategoryRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryFromFileUseCase {
    private readonly createCategoryUseCase: CreateCategoryUseCase;

    constructor(
        private readonly categoryRepository: ICategoryRepository,
    ) {
        this.createCategoryUseCase = new CreateCategoryUseCase(this.categoryRepository);
    }

    async excute(file: Express.Multer.File | undefined): Promise<void> {
        if(!file) throw new Error("Invalid file or not found!");

        const categories = await this.serializeCategoriesFromFile(file);
		categories.forEach(category => {
			this.createCategoryUseCase.excute(category);
		});
    }

    private async serializeCategoriesFromFile(file: Express.Multer.File): Promise<CreateCategoryDTO[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const parsedFile = csvParse();

            stream.pipe(parsedFile);

            const categories: CreateCategoryDTO[] = [];
            parsedFile.on("data", async (line) => {
				const [ name, description ] = line;
				categories.push({ name, description });
            }).on("end", () => {
				fs.promises.unlink(file.path);
				resolve(categories);
            }).on("error", (err) => {
				reject(err);
			});
        });
    }
}