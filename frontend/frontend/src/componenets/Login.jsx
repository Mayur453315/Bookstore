import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-2xl mt-4">Login</h3>
              <div className='mt-4 space-y-2'>
                <span className='font-bold'>Email : </span><br/>
                <input 
                  type="email" 
                  placeholder='enter the email' 
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span className='font-bold'>Password : </span><br/>
                <input 
                  type="password" 
                  placeholder='enter the password' 
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("password", { required: "This field is required" })}
                />
                {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
              </div>
              <div className='flex justify-around'>
                <button type="submit" className="btn btn-success mt-4">Login</button>
                <p className='mt-8'>Not registered? <Link to="/signup" className='text-red-500 cursor-pointer'>Signup </Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;

