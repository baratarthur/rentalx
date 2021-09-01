import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategory.useCase";

class ImportCategoryController {

    constructor(private useCase: ImportCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        const { file } = req;
        this.useCase.execute(file);
        return res.send();
    }
}

export { ImportCategoryController }