import { BaseError } from "../../../Repositories/JSON/Errors/baseError";
 
export class FileNotFoundError extends BaseError {
    constructor(message: string) {
        super("FileNotFoundError", message)
    }
} 