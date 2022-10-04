import { Request, Response } from "express";
import CreateSpecificationUseCase from "../../../application/useCases/specification/CreateSpecificationUseCase";

export default class CreateSpecificationController {
    constructor(
        private readonly createSpecificationUseCase: CreateSpecificationUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createSpecificationUseCase.excute({ name, description });
    
        return response.status(201).send();
    }
}