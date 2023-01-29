import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const DatabaseSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "rentx_user",
    password: "rentx_123_pass",
    database: "rentx-base",
    entities: [`./src/application/entities/*.{ts,js}`],
    migrations: [`./src/infrastructure/database/migrations/*.{ts,js}`],
    extra: {
        cli: {
            migrationsDir: "./src/infrastructure/database/migrations/",
            entitiesDir: "./src/application/entities/"
        }
    }
});