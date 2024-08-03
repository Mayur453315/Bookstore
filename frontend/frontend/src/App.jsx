import React from "react"; // Import React
import Home from "./home/Home"; // Import Home component
import { Navigate, Route, Routes } from "react-router-dom"; // Import routing components from react-router-dom
import Courses from "./courses/Courses"; // Import Courses component
import Contact from "./contact/Contact"; // Import Contact component
import Signup from "./componenets/Signup"; // Import Signup component
import { Toaster } from 'react-hot-toast'; // Import Toaster for toast notifications
import { useAuth } from "./context/AuthProvider"; // Import useAuth hook from AuthProvider context

function App() {
  const [authUser, setAuthUser] = useAuth(); // Get authUser and setAuthUser from AuthProvider context
  console.log(authUser); // Log authUser to console for debugging purposes

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'> {/* Apply dark mode styling */}
        <Routes> {/* Define routes for the application */}
          <Route path="/" element={<Home />} /> {/* Route for the Home component */}
          <Route 
            path="/course" 
            element={authUser ? <Courses/> : <Navigate to="/signup"/>} 
            // Route for the Courses component, redirects to Signup if user is not authenticated
          />
          <Route path="/contact" element={<Contact/>}/> {/* Route for the Contact component */}
          <Route path="/signup" element={<Signup/>}/> {/* Route for the Signup component */}
        </Routes>
        <Toaster /> {/* Render Toaster to display toast notifications */}
      </div>
    </>
  );
}

export default App; // Export App component
