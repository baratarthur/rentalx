import { Specification } from '../../model/Specification';
import { ISpecificationDTO, ISpecificationRepository } from '../Ispecification.repository';

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;
    
    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if(!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(
            specification => specification.name === name
        );

        return specification;
    }

    create({ name, description }: ISpecificationDTO): void {
        const specification = new Specification();

        Object.assign(
            specification,
            { name, description }
        );

        this.specifications.push(specification);
    }
}

export { SpecificationsRepository }
