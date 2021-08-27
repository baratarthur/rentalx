import { CategoriesRepository } from "../../repositories/implementations/categories.repository";
import { CreateCategoryController } from "./CreateCategory.controller";
import { CreateCategorieUseCase } from "./CreateCategory.useCase";


const categoriesRepository = CategoriesRepository.getInstance();

const useCase = new CreateCategorieUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(useCase);

export { createCategoryController };
