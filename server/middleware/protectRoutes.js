import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../configs/Env.js';
import { User } from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzJkYjRlYjhjZDg1MTlmNTRjNzA0YWEiLCJpYXQiOjE3MzEwNDg2ODMsImV4cCI6MTczMTEzNTA4M30.utz1B2oryb_7CM8GbGIVGgr-o_-_pGcKgZnq2K3vlwg"

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