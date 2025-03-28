import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button } from "@material-tailwind/react";

const InternshipPage_Card = (props) => {
  return (
    <div className="mt-2">
      <div className="relative h-full w-full">
        <img
          src={props.internship_url}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              {props.internship_name}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              {props.internship_body}
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to={props.toRef}>
                <Button className="cursor-pointer"size="lg" color="white">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage_Card;
