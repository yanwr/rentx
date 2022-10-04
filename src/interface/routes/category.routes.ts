import { Router } from "express";
import multer from "multer";
import CategoryControllerCreator from "../controllers/category/creator";

const categoryRoutes = Router();

const createCategoryController = CategoryControllerCreator.createCategoryController;
const findAllCategoryController = CategoryControllerCreator.findAllCategoryController;
const createCategoryFromFileController = CategoryControllerCreator.createCategoryFromFileController;

categoryRoutes.get("/categories", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoryRoutes.post("/categories", (request, response) => {
    return findAllCategoryController.handle(request, response);
});

const upload = multer({
    dest: "./tmp"
});
categoryRoutes.post("/categories/import", upload.single("file"), (request, response) => {
    return createCategoryFromFileController.handle(request, response);
});


export default categoryRoutes;