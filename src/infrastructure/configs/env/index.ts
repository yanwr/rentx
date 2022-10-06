import dotenv from "dotenv";

export default class EnvConfig {
    public static initialize(): void {
        dotenv.config();
    }
}