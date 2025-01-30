import { BaseError } from "./BaseError"

export class JSONParseError extends BaseError {
    constructor(message: string) {
        super("JSONParseError", message)
    }
}