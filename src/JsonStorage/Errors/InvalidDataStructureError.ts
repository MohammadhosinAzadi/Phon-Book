import { BaseError } from "../../JsonStorage/Errors/baseError"

export class InvalidDataStructureError extends BaseError {
    constructor(message: string) {
        super("InvalidDataStructureError", message)
    }
} 