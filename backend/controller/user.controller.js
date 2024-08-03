import User from "../model/user.model.js"; // Import the User model from the model directory
import bycryptjs from "bcryptjs"; // Import bcryptjs for password hashing and comparison

// Define an asynchronous function for user signup
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body; // Destructure user details from request body
        const user = await User.findOne({ email }); // Find a user with the provided email

        if (user) { // Check if a user already exists with the provided email
            return res.status(400).json({ message: "User already exists" }); // Respond with 400 status and a message if the user exists
        }
        
        const hashPassword = await bycryptjs.hash(password, 10); // Hash the provided password with a salt round of 10
        const createdUser = new User({ // Create a new user instance
            fullname: fullname,
            email: email,
            password: hashPassword,
        });

        await createdUser.save(); // Save the new user to the database
        res.status(201).json({ // Respond with 201 status and a success message
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) { // Catch any errors during the process
        console.log("Error: " + error.message); // Log the error message to the console
        res.status(500).json({ message: "Internal server error" }); // Respond with 500 status and an internal server error message
    }
};

// Define an asynchronous function for user login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body; // Destructure email and password from request body
        const user = await User.findOne({ email }); // Find a user with the provided email
        const isMatch = await bycryptjs.compare(password, user.password); // Compare the provided password with the stored hashed password

        if (!user || !isMatch) { // Check if the user does not exist or the passwords do not match
            return res.status(400).json({ message: "Invalid username or password" }); // Respond with 400 status and an invalid credentials message
        } else {
            res.status(200).json({ // Respond with 200 status and a success message
                message: "Login successfully",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            });
        }
    } catch (error) { // Catch any errors during the process
        console.log("error:" + error.message); // Log the error message to the console
        res.status(500).json({ message: "Internal server error" }); // Respond with 500 status and an internal server error message
    }
}
