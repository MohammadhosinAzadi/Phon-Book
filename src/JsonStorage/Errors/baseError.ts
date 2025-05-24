export class BaseError extends Error  {
    constructor(public name: string, message: string) {
        super(message);
    }
}