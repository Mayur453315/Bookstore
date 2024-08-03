import mongoose from "mongoose"; // Import mongoose to interact with MongoDB

// Define the schema for the User model
const userSchema = mongoose.Schema({
    fullname: { // Field for the user's full name
        type: String, // Data type is String
        required: true, // This field is mandatory
    },
    email: { // Field for the user's email address
        type: String, // Data type is String
        required: true, // This field is mandatory
        unique: true, // This field must be unique across all users
    },
    password: { // Field for the user's password
        type: String, // Data type is String
        required: true, // This field is mandatory
    },
});

// Create a model named "User" using the defined schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
