import { BaseError } from "./BaseError"

export class InvalidDataStructureError extends BaseError {
    constructor(message: string) {
        super("InvalidDataStructureError", message)
    }
} 