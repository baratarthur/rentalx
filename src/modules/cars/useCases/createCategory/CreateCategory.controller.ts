import { Request, Response } from "express";
import { CreateCategorieUseCase } from "./CreateCategory.useCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategorieUseCase) {}

    handle(req: Request, res: Response) {
        const { name, description } = req.body;

        try {
            this.createCategoryUseCase.execute({ name, description });
            return res.status(201).send();
        } catch (error) {
            return res.status(400).send({error: error.message});
        }
    }
}

export { CreateCategoryController };
