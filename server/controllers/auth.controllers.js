import { User } from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generateJwtToken.js";

// SIGN UP AUTHENTICATION
export const signUp = async (req, res) =>{
    try {
        const { username, password, email } = req.body;

        if(!username || !password || !email) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format', success: false });
        }

        // Password validation
        if(password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters.', success: false });
        }

        // Existing email validation 
        const exitingUserByEmail = await User.findOne({email : email});

        if(exitingUserByEmail){
            return res.status(400).json({ message: 'Email already exists', success: false });
        }

        // Existing username validation 
        const exitingUserByUsername = await User.findOne({username : username});

        if(exitingUserByUsername){
            return res.status(400).json({ message: 'Username already exists', success: false });
        }

        // Creating hashed password to save in database
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Creating new user 
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
        });
        console.log("...newUser",newUser)

        // Generate Token
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({success: true, user: {
                ...newUser._doc,
                password: '',
            } });
        }

    } 
    
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

// LOG IN AUTHENTICATION
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }
        
        // Email validation 
        const user = await User.findOne({email : email});

        if(!user){
            return res.status(404).json({ message: 'Email not found', success: false });
        }

        // Password validation 
        const isCorrectPassword = await bcryptjs.compare(password, user.password);

        if(!isCorrectPassword){
            return res.status(400).json({ message: 'User name or password is wrong.', success: false });
        }

        // Genertae token with user id 
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({ success: true, 
            user: {
                ...user._doc,
                password : '',
            }})

    } 
    
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

// LOG OUT AUTHENTICATION
export async function logout (req, res) {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: 'Logged out successfully' , success: true });
    } 
    
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

export const authCheck = async (req , res) => {
    try {
        res.status(200).json({ success: true, user: req.user });
    } 
    
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}