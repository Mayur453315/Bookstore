import mongoose from "mongoose"; // Import mongoose to interact with MongoDB

// Define the schema for the Book model
const bookSchema = mongoose.Schema({
    name: String, // Field for the book's name
    price: Number, // Field for the book's price
    title: String, // Field for the book's title
    category: String, // Field for the book's category
    image: String // Field for the book's image URL or path
});

// Create a model named "Book" using the defined schema
const Book = mongoose.model("Book", bookSchema);

// Export the Book model for use in other parts of the application
export default Book;
