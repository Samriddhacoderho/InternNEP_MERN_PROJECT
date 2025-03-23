import React, { useEffect, useState } from "react";
import { Rating } from "flowbite-react";
import axios from "axios";
import ShowTestimonialCard from "./ShowTestimonialCard";

const ShowTestimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getRevs");
        setReviews(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error.message);
        }
      }
    };

    fetchData();
  },[]);

  return (
    <div className="mb-2 dark:border-gray-700 dark:bg-gray-800 p-2">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-yellow-300 text-center">
        Our Testimonials
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
        {reviews.map((review) => {
          return (
            <div key={review._id}>
          <ShowTestimonialCard reviews={review}/>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTestimonials;
