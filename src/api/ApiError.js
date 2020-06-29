export class ApiError extends Error {
    code = null;
    message = null;

    constructor(errorCode, errorMessage) {
        super(message);
        this.code = errorCode;
        this.message = errorMessage;
    }
}
