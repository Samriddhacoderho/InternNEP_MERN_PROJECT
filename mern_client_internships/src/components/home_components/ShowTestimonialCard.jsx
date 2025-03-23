import React from 'react'
import { Rating } from "@material-tailwind/react";


const ShowTestimonialCard = (props) => {
    const {name,stars,revMsg}=props.reviews
  return (
    <div>
    <div className="flex items-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full"
        src="https://humanhealth.com.hk/en/service/detail/corporate-medical/upload/service/32/self/5c108ff960152.jpg"
        alt="Jese image"
      />
      <div className="flex flex-col w-full h-30 max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </span>
        </div>
        <Rating unratedColor="red" ratedColor="red" value={stars} readonly />
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {revMsg.length>40?revMsg.slice(0,40)+"...":revMsg}
        </p>
      </div>
    </div>
  </div>
  )
}

export default ShowTestimonialCard
