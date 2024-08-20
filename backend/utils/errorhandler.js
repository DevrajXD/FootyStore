class ErrorHander extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode
        this.error_code = 400;
        Error.captureStackTrace(this,this.constructor)
    }
} 


module.exports = ErrorHander