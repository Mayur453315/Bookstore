import express from 'express'; // Import express to create the router
import { signup, login } from "../controller/user.controller.js"; // Import the signup and login functions from the user controller

const router = express.Router(); // Create a new router object using express.Router()

// Define a route for HTTP POST requests to the "/signup" path, which will call the signup function
router.post("/signup", signup);

// Define a route for HTTP POST requests to the "/login" path, which will call the login function
router.post("/login", login);

// Export the router object so it can be used in other parts of the application
export default router;
