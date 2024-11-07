import express from 'express';
import authRouters from './routes/auth.routes.js'
import matchRouters from './routes/match.routes.js'

// Connect to the Mongo DB
import { connectDB } from './configs/db.js'

// Environment variables
import { ENV_VARS } from './configs/Env.js';

// CORS
import cors from 'cors';
import cookieParser from 'cookie-parser';

// middleware
import { protectRoute } from './middleware/protectRoutes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRouters)
app.use("/api/v1/match",protectRoute, matchRouters)

app.listen(ENV_VARS.PORT, () => {
  console.log(`Example app listening on port ${ENV_VARS.PORT}`)
  connectDB()
})
