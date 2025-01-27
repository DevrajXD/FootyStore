const ErrorHandler = require("../utils/errorhandler");


module.exports = (err, req, res, next)=> {
    //console.log(err.StatusCode);
    
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    
    // Wrong Mongodb Id Error
    
    if (err.name === "CastError") {
    
        const message = `Resource not found. Invalid: ${err.path}`;
       err = new ErrorHandler(message,400);
       
        //return res.status(400).json({ success: false, error: message });
    }

    // Mongoose duplicate key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    } 

    // Wrong JWT error
    if(err.code === "JsonWebTokenError"){
        const message = `Json Web Token in invalid, try again `;
        err = new ErrorHandler(message,400);
    }

         // JWT expire error
    if(err.code === "TokenexpireError"){
        const message = `Json Web Token is Expired, try again `;
        err = new ErrorHandler(message,400);
      
    }
    res.status(err.statusCode).json({
        success:false,
        error:err.message,
    });
};