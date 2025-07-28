import express from "express"
import dotenv from 'dotenv'
import connectdb from "./src/config/db.js";
import apiRoutes from './src/routes/apiRoutes.js'
import cors from 'cors'
dotenv.config();


const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://sti-mart-r4hf.vercel.app',
  'https://sti-mart.vercel.app',
  'https://cart-frontend-2.vercel.app',
  'https://stimart-frontend.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // handle preflight

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