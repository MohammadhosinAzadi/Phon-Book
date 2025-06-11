import { JSONParseError } from "../../../Repositories/JSON/Errors/JSONParseError"

export function parsJSON(data: string) {
    try {
        return JSON.parse(data)
    } catch (error) {
        throw new JSONParseError('Invalid JSON format.');
    }
}