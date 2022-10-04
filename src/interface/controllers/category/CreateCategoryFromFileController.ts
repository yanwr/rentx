import { Request, Response } from "express";
import CreateCategoryFromFileUseCase from "../../../application/useCases/category/CreateCategoryFromFileUseCase";

export default class CreateCategoryFromFileController {
    constructor(
        private readonly createCategoryFromFileUseCase: CreateCategoryFromFileUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { file } = request;

        this.createCategoryFromFileUseCase.excute(file);
    
        return response.status(201).send();
    }
}