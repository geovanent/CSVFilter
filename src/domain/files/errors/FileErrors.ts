export class FileUploadError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FileUploadError';
    }
}

export class FileValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FileValidationError';
    }
}