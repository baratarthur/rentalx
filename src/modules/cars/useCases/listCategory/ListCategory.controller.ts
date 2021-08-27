import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategory.useCase";


class ListCategorysController {
    constructor(private useCase: ListCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        const list = this.useCase.execute();
        return res.json(list);
    }
}

export { ListCategorysController };
