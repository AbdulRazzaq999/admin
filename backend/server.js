import express from 'express'
import cors from 'cors'
import "dotenv/config"
import connectDB from './config/mongdb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './config/ProductModels/routers/userRouter.js';
import ProRouter from './config/ProductModels/routers/productRouter.js';
import cartRouter from './config/ProductModels/routers/cartRouter.js';
import orderRouter from './config/ProductModels/routers/orderRouter.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT ||4000;

connectDB();
connectCloudinary();

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.use('/api/user',userRouter)
app.use('/api/product',ProRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.listen(port,()=>console.log("Server started " + port))