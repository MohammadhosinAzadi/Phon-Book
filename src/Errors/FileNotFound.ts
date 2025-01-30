import { BaseError } from "./BaseError";
 
export class FileNotFoundError extends BaseError {
    constructor(message: string) {
        super("FileNotFoundError", message)
    }
} 
  