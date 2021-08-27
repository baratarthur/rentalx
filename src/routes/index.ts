import { Router } from "express";
import { categoryRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specification", specificationRoutes);

export { router };
