class InternalError {
    constructor(
        public message: string,
        protected code: number = 500,
        protected description?: string,
        public readonly statusCode: number
    ) {
        this.message = message;
        this.statusCode = statusCode
    }
}

export default InternalError;