
import React from "react"; // Import React
import { useAuth } from "../context/AuthProvider"; // Import useAuth hook from AuthProvider context
import toast from "react-hot-toast"; // Import toast for displaying notifications

function Logout() {
  const [authUser, setAuthUser] = useAuth(); // Get authUser and setAuthUser from AuthProvider context

  const handleLogout = () => { // Function to handle logout
    try {
      setAuthUser({ // Clear user data in Auth context
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users"); // Remove user data from localStorage
      toast.success("Logout successfully"); // Show success notification

      setTimeout(() => {
        window.location.reload(); // Reload the page after 3 seconds
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error); // Show error notification if something goes wrong
      setTimeout(() => {}, 1000); // Empty timeout (not doing anything here)
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout} // Call handleLogout function when button is clicked
      >
        Logout
      </button>
    </div>
  );
}

export default Logout; // Export Logout component
