import { Router } from 'express';
import multer from 'multer';

import { listCategoryController } from '../modules/cars/useCases/listCategory';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoryRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoryRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoryRoutes.get("/all", (req, res) => {
    return listCategoryController.handle(req, res);
});

categoryRoutes.post('/import', upload.single('file'), (req, res) => {
    return importCategoryController.handle(req, res);
});

export { categoryRoutes };
