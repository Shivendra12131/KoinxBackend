const ServerError = require("../error/ServerError.js");


exports.error = (err, req, res, next) => {
    if (err instanceof ServerError) {
      return res.status(err.statusCode).json({
        success: false,
        error: err.message
      });
    }
    
    res.status(500).json({
        success: false,
        error: 'Internal Server Error'
    });
}
