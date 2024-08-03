import express from "express"; // Import express to create the router

import { getBook } from "../controller/book.controller.js"; // Import the getBook function from the book controller

const router = express.Router(); // Create a new router object using express.Router()

// Define a route for HTTP GET requests to the root path, which will call the getBook function
router.get("/", getBook);

// Export the router object so it can be used in other parts of the application
export default router;
