import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecification.useCase";

class CreateSpecificationController {

    constructor(private useCase: CreateSpecificationUseCase) {}

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;
    
        this.useCase.execute({ name, description });
    
        return res.status(201).send();
    }
}

export { CreateSpecificationController }
