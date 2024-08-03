import React, { createContext, useContext, useState } from 'react'; // Import necessary modules from React

export const AuthContext = createContext(); // Create a new context for authentication

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users"); // Get initial user data from localStorage
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined // Set authUser state with parsed data or undefined if no data exists
  );

  return (
    // Provide authUser and setAuthUser to the context
    <AuthContext.Provider value={[authUser, setAuthUser]}>  
      {children} // Render children components
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); // Custom hook to use the AuthContext
