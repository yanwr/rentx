import { Request, Response } from "express";
import FindAllSpecificationUseCase from "../../../application/useCases/specification/FindAllSpecificationUseCase";

export default class FindAllSpecificationController {
    constructor(
        private readonly findAllSpecificationUseCase: FindAllSpecificationUseCase
    ) {}

    async handle(request: Request, response: Response) {
        return response.status(200).json({ specifications: this.findAllSpecificationUseCase.excute() });
    }
}