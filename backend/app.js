const express = require("express");
// const path = require("path");
// const multer = require("multer");
const fileUpload = require("express-fileupload")
const errorMiddleware = require("./middleware/error")
const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload())


// Route Import
const user = require("./routes/userRoute");
const bet = require("./routes/betRoute");
const deposit = require("./routes/depositRoute");
const withdrawal = require("./routes/withdrawalRoute");
const winset = require("./routes/winsetRoute")
const showtime = require("./routes/showtimeRoute")
const say = require("./routes/sayRoute")
const showhistory = require("./routes/showhistoryRoute")
const classes = require("./routes/classRoute")
const admission = require("./routes/admissionRoute")
const session = require("./routes/sessionRoute")
const addstudent = require("./routes/addStudentRoute") 

// if(process.env.NODE_ENV!=="PRODUCTION"){

//     require("dotenv").config({path:"server/config/config.env"})
// }
// const storage= multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"images");
//     },
//     filename:(req,file,cb)=>{
//         cb(null,"hello.jpg")
//     }
// })

// const upload = multer({ storage:storage });
// app.post("/api/v1/upload",upload.single("file"), (req,res)=>{
//     res.status(200).json("File has been uploaded")
// })

app.use("/api/v1",user)
app.use("/api/v1",bet)
app.use("/api/v1",deposit)
app.use("/api/v1",withdrawal)
app.use("/api/v1",winset)
app.use("/api/v1",showtime)
app.use("/api/v1",say)
app.use("/api/v1",showhistory)
app.use("/api/v1",classes)
app.use("/api/v1",admission)
app.use("/api/v1",session)
app.use("/api/v1",addstudent)

// app.use(express.static(path.join(__dirname,"../frontend/build")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
// })

app.use(errorMiddleware)



module.exports = app; 