import { BaseError } from "../../JsonStorage/Errors/baseError";
 
export class FileNotFoundError extends BaseError {
    constructor(message: string) {
        super("FileNotFoundError", message)
    }
} 