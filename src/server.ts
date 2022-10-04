import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./infrastructure/configs/swagger/swagger.json";

import categoryRoutes from "./interface/routes/category.routes";
import specificationRoutes from "./interface/routes/specification.routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(categoryRoutes);
app.use(specificationRoutes);

app.listen(3333, () => console.log("Server is running!"))