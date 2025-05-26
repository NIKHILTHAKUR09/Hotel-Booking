import express from 'express';
import colors from 'colors';
import "dotenv/config";
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import connectDB from './configs/db.js';
import clerkWebhooks from './controllers/clerkWebhooks.js';
connectDB()

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());


// Middleware for Clerk authentication
app.use(express.json());
app.use(clerkMiddleware())

// Api To listen to clerk webhook

app.use("/api/clerk",clerkWebhooks)

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlack.green);
});