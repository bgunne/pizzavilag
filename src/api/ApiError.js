export class ApiError extends Error {
    code = null;
    message = null;

    constructor(errorCode, errorMessage) {
        super();
        this.code = errorCode;
        this.message = errorMessage;
    }
}
