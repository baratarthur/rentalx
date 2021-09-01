import { CategoriesRepository } from "../../repositories/implementations/categories.repository";
import { ImportCategoryController } from "./ImportCategory.controller";
import { ImportCategoryUseCase } from "./ImportCategory.useCase";

const repo = CategoriesRepository.getInstance();

const useCase = new ImportCategoryUseCase(repo);

const importCategoryController = new ImportCategoryController(useCase);

export { importCategoryController };
