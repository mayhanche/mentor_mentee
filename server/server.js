import express from 'express';
// Connect to Mongo DB
import { connectDB } from './configs/db.js'
// Environment variables
import { ENV_VARS } from './configs/Env.js';
// CORS
import cors from 'cors';
import cookieParser from 'cookie-parser';
// Middleware
import { protectRoute } from './middleware/protectRoutes.js';

// Routes 
import authRouters from './routes/auth.routes.js'
import matchRouters from './routes/match.routes.js'
import blogRouters from './routes/blog.routes.js'
import announcementRouters from './routes/announcement.routes.js'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRouters)
app.use("/api/v1/match",protectRoute, matchRouters)
app.use("/api/v1/blog", blogRouters)
app.use("/api/v1/announcement", announcementRouters)

app.listen(ENV_VARS.PORT, () => {
  console.log(`Server is listeniing at ${ENV_VARS.PORT}`)
  connectDB()
})
