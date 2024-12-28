export class FileNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FileNotFoundError";
    }
}

export class JSONParseError extends Error {
    constructor(message: string, public originalError: Error) {
        super(message);
        this.name = "JSONParseError";
    }
}

export class InvalidDataStructureError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidDataStructureError";
    }
}