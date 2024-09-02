const mongoose = require('mongoose');

exports.connect = async () => {
    try {
        await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
            connectTimeoutMS: 30000,         
            maxPoolSize: 10,                 
            minPoolSize: 5,                  
            socketTimeoutMS: 45000           
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit the process with a failure code
    }
};
