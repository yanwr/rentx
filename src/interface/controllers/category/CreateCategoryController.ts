import { Request, Response } from "express";
import CreateCategoryUseCase from "../../../application/useCases/category/CreateCategoryUseCase";

export default class CreateCategoryController {
    constructor(
        private readonly createCategoryUseCase: CreateCategoryUseCase
    ) {}

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createCategoryUseCase.excute({ name, description });
    
        return response.status(201).send();
    }
}