import React from 'react'; // Import React
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form for form handling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import axios from 'axios'; // Import axios for making HTTP requests
import toast from 'react-hot-toast'; // Import toast for displaying notifications
import { useAuth } from '../context/AuthProvider'; // Import useAuth hook from AuthProvider context

function Login() {
  const { setAuthUser } = useAuth(); // Get setAuthUser function from AuthProvider context
  const {
    register,
    handleSubmit,
    formState: { errors }, // Destructure functions and form state from useForm
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email, // Extract email from form data
      password: data.password, // Extract password from form data
    };
    await axios.post('http://localhost:4001/user/login', userInfo) // Send POST request to login endpoint
      .then((res) => {
        console.log(res.data); // Log the response data
        if (res.data) {
          toast.success('Login successful!'); // Show success notification
          setAuthUser({ user: res.data.user }); // Set user in Auth context
          localStorage.setItem('users', JSON.stringify(res.data.user)); // Store user data in localStorage
          setTimeout(() => {
            document.getElementById('my_modal_3').close(); // Close the modal
            window.location.reload(); // Reload the page
          }, 3000); // Wait 3 seconds before executing
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err); // Log error
          toast.error('Error: ' + err.response.data.message); // Show error notification
          setTimeout(() => { }, 3000); // Empty timeout (not doing anything here)
        }
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal"> {/* Modal element */}
          <div className="modal-box  bg-cyan-300 text-gray-950"> {/* Modal content box */}
            <form onSubmit={handleSubmit(onSubmit)}> {/* Form submission handler */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</Link> {/* Close button */}
              <h3 className="font-bold text-2xl mt-4">Login</h3> {/* Modal header */}
              <div className='mt-4 space-y-2'> {/* Email input container */}
                <span className='font-bold'>Email: </span><br />
                <input
                  type="email"
                  placeholder='enter the email'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register('email', { required: 'This field is required' })} // Register email field with validation
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>} {/* Display error message if validation fails */}
              </div>
              <div className='mt-4 space-y-2'> {/* Password input container */}
                <span className='font-bold'>Password: </span><br />
                <input
                  type="password"
                  placeholder='enter the password'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register('password', { required: 'This field is required' })} // Register password field with validation
                />
                {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>} {/* Display error message if validation fails */}
              </div>
              <div className='flex justify-around'> {/* Button and signup link container */}
                <button type="submit" className="btn btn-success mt-4">Login</button> {/* Submit button */}
                <p className='mt-8'>Not registered? <Link to="/signup" className='text-red-500 cursor-pointer'>Signup </Link></p> {/* Signup link */}
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login; // Export Login component
