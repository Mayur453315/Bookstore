import React, { useEffect, useState } from 'react'; // Import React and hooks for state and side effects
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS for default styling
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS for styling
import Slider from "react-slick"; // Import Slider component from react-slick
import axios from 'axios'; // Import axios for making HTTP requests

import Card1 from './Card1'; // Import Card1 component to display book details

function Freebook() {
  const [book, setBook] = useState([]); // Define state for storing book data

  useEffect(() => {
    const getBook = async () => { // Define an asynchronous function to fetch book data
      try {
        const response = await axios.get('http://localhost:4001/book'); // Fetch book data from the API
        console.log(response.data); // Log the response data for debugging
        const data = response.data.filter((data) => data.category === "free"); // Filter books by "free" category
        setBook(data); // Update the state with filtered book data
      } catch (error) {
        console.log(error); // Log any errors that occur during the fetch
      }
    };
    getBook(); // Call the asynchronous function
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Define settings for the slider
  var settings = {
    dots: true, // Show dots for navigation
    infinite: false, // Disable infinite scrolling
    speed: 500, // Set transition speed to 500ms
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3, // Scroll 3 slides at a time
    initialSlide: 0, // Start with the first slide
    responsive: [ // Define responsive settings for different screen sizes
      {
        breakpoint: 1024, // When the screen width is 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 3, // Scroll 3 slides
          infinite: true, // Enable infinite scrolling
          dots: true, // Show dots for navigation
        },
      },
      {
        breakpoint: 600, // When the screen width is 600px or less
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 2, // Scroll 2 slides
          initialSlide: 2, // Start with the third slide
        },
      },
      {
        breakpoint: 480, // When the screen width is 480px or less
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide
        },
      },
    ],
  };

  return (
    <>
      <div className="course max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-4xl">Free Offered Courses</h1> {/* Title for the section */}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            magnam. Eveniet cupiditate, consequatur rerum hic ab asperiores,
            nulla accusamus odio tempore reiciendis ducimus debitis fugiat
            deleniti exercitationem modi. Alias, dolore.
          </p> {/* Placeholder text for description */}
        </div>
        <div className="slider-container mt-6">
          <Slider {...settings}> {/* Render the slider with defined settings */}
            {book.map((item) => ( // Map through the book data and create a slide for each item
              <div key={item.id} className="px-2">
                <Card1 item={item} /> {/* Render Card1 component with book item data */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook; // Export the Freebook component
