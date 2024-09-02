const mongoose = require("mongoose")

exports.connect = async ()=>{
    mongoose.connect(process.env.URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
        connectTimeoutMS: 30000,
      })
    .then(console.log("Database connected successfully"))
    .catch((err)=>{
        process.exit(1);
    })
}
