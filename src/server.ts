import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./infrastructure/configs/swagger/swagger.json";
import { DatabaseSource } from "./infrastructure/database";

import categoryRoutes from "./interface/routes/category.routes";
import specificationRoutes from "./interface/routes/specification.routes";

async function start() {
    await DatabaseSource.initialize()
        .then(() => console.log("Database has been initialized!"))
        .catch((err) => {
            console.error("Error during Database initialization!", err);
            process.exit(1);
        });

    const app = express();
    app.use(express.json());
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(categoryRoutes);
    app.use(specificationRoutes);

    app.listen(3333, () => console.log("Server is running!"))
}

start();