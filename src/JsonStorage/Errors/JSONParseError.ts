import { BaseError } from "JsonStorage/Errors/baseError"

export class JSONParseError extends BaseError {
    constructor(message: string) {
        super("JSONParseError", message)
    }
}