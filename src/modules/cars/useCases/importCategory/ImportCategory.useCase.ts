import fs from 'fs';
import { promisify } from 'util'; 
import csvParse from 'csv-parse';
import { ICategoryRepository } from '../../repositories/Icategories.repository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    unlinkAsync = promisify(fs.unlink);

    constructor(private repo: ICategoryRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
    
            const parseFile = csvParse();
    
            stream.pipe(parseFile);
    
            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({ name, description });
            }).on("end", () => {
                this.unlinkAsync(file.path);
                resolve(categories);
            });
        });        
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        
        categories.forEach((category) => {
            if(!this.repo.findByName(category.name)) {
                this.repo.create(category);
            }
        });
    }
}

export { ImportCategoryUseCase };
