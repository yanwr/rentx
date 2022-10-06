import { DataSource } from "typeorm";

export default class DatabaseSource {
    protected static dataSource: DataSource | undefined;

    public static async initialize(): Promise<void> {
        const type = process.env.DB_TYPE as string;
        const host = process.env.DB_HOST as string;
        const port = Number(process.env.DB_PORT as string);
        const username = process.env.DB_USER as string;
        const password = process.env.DB_PASS as string;
        const dataBaseName = process.env.DB_NAME as string;

        this.dataSource = new DataSource({
            type: type as any,
            host,
            port,
            username,
            password,
            database: dataBaseName,
        });

        await this.dataSource.initialize()
            .then(() => console.log("Database has been initialized!"))
            .catch((err) => {
                console.error("Error during Database initialization!", err);
                throw new Error(err)
            });
    }

    public static getConnection(): DataSource {
        if(this.dataSource) {
            return this.dataSource;
        }
        throw new Error("Error to get connection!");
    }
}