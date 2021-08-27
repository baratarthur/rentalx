import { CategoriesRepository } from "../../repositories/implementations/categories.repository";
import { ListCategorysController } from "./ListCategory.controller";
import { ListCategoryUseCase } from "./ListCategory.useCase";


const repo = CategoriesRepository.getInstance();

const useCase = new ListCategoryUseCase(repo);

const listCategoryController = new ListCategorysController(useCase);

export { listCategoryController }
