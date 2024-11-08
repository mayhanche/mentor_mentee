import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../configs/Env.js';
import { User } from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzJkYzI5MmNkN2EzZTdiYWFhZDQxNjAiLCJpYXQiOjE3MzEwNTIxNzgsImV4cCI6MTczMTEzODU3OH0.Tkgu2gOO0EsUxXzxLCbKGXG0jyDJsF3nLycNp7ScMfQ"

        console.log(token)

        if(!token){
            return res.status(401).json({ message: 'Unauthorized - No Token Provided', success: false });
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ message: 'Unauthorized - Invalid Token', success: false });
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(404).json({ message: 'Unauthorized - User not found', success: false });
        }

        req.user = user;

        next();

    } catch (error) {   
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}