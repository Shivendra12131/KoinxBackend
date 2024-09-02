// const mongoose = require("mongoose")

// exports.connect = async ()=>{
//     mongoose.connect(process.env.URL,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         serverSelectionTimeoutMS: 30000,
//         connectTimeoutMS: 30000,
//       })
//     .then(console.log("Database connected successfully"))
//     .catch((err)=>{
//         process.exit(1);
//     })
// }
const mongoose = require('mongoose');

exports.connect = async () => {
    try {
        await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Time in milliseconds to wait for a server to respond
            connectTimeoutMS: 30000,         // Time in milliseconds before connection attempt times out
            maxPoolSize: 10,                 // Maximum number of connections in the pool
            minPoolSize: 5,                  // Minimum number of connections in the pool
            socketTimeoutMS: 45000           // Time in milliseconds before an idle socket times out
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit the process with a failure code
    }
};
