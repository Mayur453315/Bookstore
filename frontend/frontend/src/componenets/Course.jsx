import React from 'react'
import NavBar from './NavBar'
import CardList from './CardList'
import CourseList from './CourseList'
import '../App.css';
export default function Course() {
  return (
    <>
    
    <div className= {"course max-w-screen-2xl container mx-auto md:px-20 px-4 "}>
        <div className="mt-15 items-center justify-center text-center">
          <h1 className="text-2xl  pt-32 md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <a href="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </a>
          <div >
        <CourseList/>
            </div>
        </div>
          </div>
          
        
        
    
    </>
  )
}
