import { ICategoryRepository } from "modules/cars/repositories/Icategories.repository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategorieUseCase {
    constructor(private repo: ICategoryRepository) {}

    execute({ name, description }: IRequest) {
        if(this.repo.findByName(name))
            throw new Error("Category already exists");

        this.repo.create({ name, description });
    }
}

export { CreateCategorieUseCase };
