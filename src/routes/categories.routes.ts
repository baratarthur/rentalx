import { response, Router } from 'express';
import multer from 'multer';

import { listCategoryController } from '../modules/cars/useCases/listCategory';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

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
    const { file } = req;
    console.log('file', file);

    return res.send();
});

export { categoryRoutes };
