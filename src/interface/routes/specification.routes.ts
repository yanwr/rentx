import { Router } from "express";
import SpecificationControllerCreator from "../controllers/specification/creator";

const specificationRoutes = Router();

const createSpecificationController = SpecificationControllerCreator.createSpecificationController
const findAllSpecificationController = SpecificationControllerCreator.findAllSpecificationController

specificationRoutes.get("/specifications", (request, response) => {
    return findAllSpecificationController.handle(request, response);
});
specificationRoutes.post("/specifications", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export default specificationRoutes;