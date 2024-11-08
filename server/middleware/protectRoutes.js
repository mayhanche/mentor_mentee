import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../configs/Env.js';
import { User } from '../models/user.model.js';

// PROTECTING ROUTES USING TOKEN 
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies["token"]

        if(!token){
            return res.status(401).json({ message: 'Unauthorized Access. No Token Provided', success: false });
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ message: 'Unauthorized Access. Invalid Token', success: false });
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(404).json({ message: 'Unauthorized Access. User not found', success: false });
        }

        req.user = user;

        console.log(token); 
        
        next();

    } 
    catch (error) {   
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}