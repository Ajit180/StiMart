import express from "express"
import dotenv from 'dotenv'
import connectdb from "./src/config/db.js";
import apiRoutes from './src/routes/apiRoutes.js'
import cors from 'cors'
dotenv.config();


const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    'https://admin-dashboard-mtdy.vercel.app',
    'http://localhost:3000',
    'https://cart-frontend-2.vercel.app',
  ];

// 🛡️ Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// 🛡️ Middleware to parse URL-encoded data (from forms etc.)
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
    connectdb();
})