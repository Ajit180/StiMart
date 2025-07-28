import express from "express"
import dotenv from 'dotenv'
import connectdb from "./src/config/db.js";
import apiRoutes from './src/routes/apiRoutes.js'

dotenv.config();


import cors from 'cors';

const app = express();

app.use(cors());

// 🛡️ Middleware to parse JSON bodies
app.use(express.json());


// 🛡️ Middleware to parse URL-encoded data (from forms etc.)
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
    connectdb();
})