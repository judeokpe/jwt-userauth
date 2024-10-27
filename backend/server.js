import express from 'express'
import dotenv from 'dotenv'
import router from './routes/userRoute.js';
import { notFound, errorHandler } from './middlwares/errorMiddlewares.js';
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';

connectDB();
dotenv.config();
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


//routhes and middleware
app.get('/', (req, res)=>{
 res.status(200).json({message: "Home page"})
})

app.use('/api/user', router)



// middlewares
app.use(notFound);
app.use(errorHandler)
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})