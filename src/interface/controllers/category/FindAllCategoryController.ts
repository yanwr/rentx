import { Request, Response } from "express";
import FindAllCategoryUseCase from "../../../application/useCases/category/FindAllCategoryUseCase";

export default class FindAllCategoryController {
    constructor(
        private readonly findAllCategoryUseCase: FindAllCategoryUseCase
    ) {}

    handle(request: Request, response: Response) {
        return response.status(200).json({ categories: this.findAllCategoryUseCase.excute() });
    }
}