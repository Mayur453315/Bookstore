import React from "react"; // Import React
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import necessary functions from react-router-dom
import Login from "./Login"; // Import Login component
import { useForm } from "react-hook-form"; // Import useForm hook from react-hook-form
import axios from "axios"; // Import axios for making HTTP requests
import toast from "react-hot-toast"; // Import toast for displaying notifications

function Signup() {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Get the navigate function
  const from = location.state?.from?.pathname || "/"; // Get the redirect path after signup

  const {
    register, // Register input fields
    handleSubmit, // Handle form submission
    formState: { errors }, // Get form errors
  } = useForm(); // Initialize useForm

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname, // User's full name
      email: data.email, // User's email
      password: data.password, // User's password
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo) // Make POST request to signup API
      .then((res) => {
        console.log(res.data); // Log the response data
        if (res.data) {
          toast.success("Signup Successfully"); // Show success toast notification
          navigate(from, { replace: true }); // Redirect user
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // Store user data in localStorage
      })
      .catch((err) => {
        if (err.response) {
          console.log(err); // Log the error
          toast.error("Error: " + err.response.data.message); // Show error toast notification
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px]  ">
          <div className="modal-box  bg-cyan-300 text-gray-950">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕ {/* Close button */}
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-violet-950"
                  {...register("fullname", { required: true })} // Register fullname input field with validation
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required {/* Show error message if fullname is required */}
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-violet-950"
                  {...register("email", { required: true })} // Register email input field with validation
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required {/* Show error message if email is required */}
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-violet-950"
                  {...register("password", { required: true })} // Register password input field with validation
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required {/* Show error message if password is required */}
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup {/* Signup button */}
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-red-950 cursor-pointer "
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login {/* Login button */}
                  </button>{" "}
                  <Login /> {/* Login component */}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup; // Export Signup component
