const express = require("express")
const cookieParser = require('cookie-parser');
const database = require("./config/Database")
const router = require('./router/Router');
const cors = require('cors');
const { priceScheduler } = require("./util/scheduler");
const { error } = require("./middleware/error");


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

//using some predefined middlewares to fetch and parse data from requests
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());
app.use(cors())

//routing starts from here
app.use('/',router)

//error handling middleware
app.use(error);


app.listen(PORT , () => {
    console.log(`Server Listening on ${PORT}`)
   database.connect().then();
    priceScheduler();
})
