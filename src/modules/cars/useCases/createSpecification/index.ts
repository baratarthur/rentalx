import { SpecificationsRepository } from "../../repositories/implementations/specifications.repository";
import { CreateSpecificationController } from "./CreateSpecification.controller";
import { CreateSpecificationUseCase } from "./CreateSpecification.useCase";

const repo = SpecificationsRepository.getInstance();

const useCase = new CreateSpecificationUseCase(repo);

const createSpecificationController = new CreateSpecificationController(useCase);

export { createSpecificationController };
