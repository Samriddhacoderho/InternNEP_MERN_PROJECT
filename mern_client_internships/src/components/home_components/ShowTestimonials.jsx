import React from "react";
import {Rating} from "flowbite-react"

const ShowTestimonials = () => {
  return (
    <div className="mb-2 dark:border-gray-700 dark:bg-gray-800 p-2">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-yellow-300 text-center">Our Testimonials</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
        <div>
          <div className="flex items-start gap-2.5">
            <img
              className="w-8 h-8 rounded-full"
              src="https://humanhealth.com.hk/en/service/detail/corporate-medical/upload/service/32/self/5c108ff960152.jpg"
              alt="Jese image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <Rating>
               <Rating.Star/>
               <Rating.Star/>
               <Rating.Star/>
               <Rating.Star/>
              </Rating>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolor omnis beatae obcaecati aspernatur autem repellendus eligendi illo provident sint, nam quo rem! Veniam cumque eum illo facere laudantium necessitatibus, fugit similique atque cupiditate natus consequuntur voluptates, optio ducimus! Incidunt deserunt possimus sunt aspernatur dolore quas omnis distinctio culpa magnam?
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="flex items-start gap-2.5">
            <img
              className="w-8 h-8 rounded-full"
              src="https://humanhealth.com.hk/en/service/detail/corporate-medical/upload/service/32/self/5c108ff960152.jpg"
              alt="Jese image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <Rating>
               <Rating.Star/>
               <Rating.Star/>
               <Rating.Star/>
               <Rating.Star/>
              </Rating>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolor omnis beatae obcaecati aspernatur autem repellendus eligendi illo provident sint, nam quo rem! Veniam cumque eum illo facere laudantium necessitatibus, fugit similique atque cupiditate natus consequuntur voluptates, optio ducimus! Incidunt deserunt possimus sunt aspernatur dolore quas omnis distinctio culpa magnam?
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="flex items-start gap-2.5">
            <img
              className="w-8 h-8 rounded-full"
              src="https://humanhealth.com.hk/en/service/detail/corporate-medical/upload/service/32/self/5c108ff960152.jpg"
              alt="Jese image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <Rating>
               <Rating.Star/>
               <Rating.Star/>
               <Rating.Star/>
               <Rating.Star/>
              </Rating>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolor omnis beatae obcaecati aspernatur autem repellendus eligendi illo provident sint, nam quo rem! Veniam cumque eum illo facere laudantium necessitatibus, fugit similique atque cupiditate natus consequuntur voluptates, optio ducimus! Incidunt deserunt possimus sunt aspernatur dolore quas omnis distinctio culpa magnam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTestimonials;
