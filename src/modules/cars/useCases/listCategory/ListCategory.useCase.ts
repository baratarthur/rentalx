import { Category } from 'modules/cars/model/Category';
import { CategoriesRepository } from '../../repositories/implementations/categories.repository';

class ListCategoryUseCase {
    constructor(private repo: CategoriesRepository) {}

    execute(): Category[] {
        return this.repo.list();
    }
}

export { ListCategoryUseCase };
