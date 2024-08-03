import Book from "../model/book.model.js"; // Import the Book model from the model directory

export const getBook = async(req, res) => { // Export an asynchronous function named getBook, handling HTTP requests
    try { // Start a try block to catch potential errors
        const book = await Book.find(); // Query the Book model to find all documents and wait for the result
        res.status(200).json(book); // Send a response with status 200 (OK) and the retrieved books in JSON format
    } catch (error) { // Catch any errors that occur during the try block
        console.log("error :", error); // Log the error to the console for debugging
        res.status(500).json(error); // Send a response with status 500 (Internal Server Error) and the error details in JSON format
    }
}
