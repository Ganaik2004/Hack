import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import cookieParser from "cookie-parser"
import listingRouter from './routes/listing.route.js'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Data base is connected")
}).catch((err)=>{
    console.log(err);
})
const app = express();
app.use(express.json());
app.use(cookieParser());
// app.get('/',(req,res)=>{
//     res.send("Hello -world");
// })

// app.use('/api/auth',);
 app.use('/api/user',userRoutes);
 app.use('/api/listing',listingRouter)
app.listen(3000,()=>{
    console.log("Server is started at port 3000")
})

//middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode||500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})