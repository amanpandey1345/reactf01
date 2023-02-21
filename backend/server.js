const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
// const cloudinary = require('cloudinary');



// Handling Uncaught Exception  
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to  Uncaught Exception `);

    process.exit(1);

})

// Config
dotenv.config({path:"backend/config/config.env"})
if(process.env.NODE_ENV!=="PRODUCTION"){

    // require("dotenv").config({path:"server/config/config.env"})
}

// connect database

connectDatabase()

// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.CLOUD_API_KEY, 
//     api_secret:process.env.CLOUD_SECRET, 
//     secure: true
//   });

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server in running on http://localhost:${process.env.PORT}`);
})    

// unhandled Promise Rejection 
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection `);
    server.close(()=>{
        process.exit(1);
    })
})