import { BaseError } from "../../../Repositories/JSON/Errors/baseError"

export class InvalidDataStructureError extends BaseError {
    constructor(message: string) {
        super("InvalidDataStructureError", message)
    }
} 