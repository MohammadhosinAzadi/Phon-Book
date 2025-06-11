import { BaseError } from "../../../Repositories/JSON/Errors/baseError"

export class JSONParseError extends BaseError {
    constructor(message: string) {
        super("JSONParseError", message)
    }
}