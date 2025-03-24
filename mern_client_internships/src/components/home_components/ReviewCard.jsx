import React, { useContext, useState } from "react";
import { Rating } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { context } from "../../contexts/Context";
import Success from "../alerts&prompts/Success";
import Error from "../alerts&prompts/Error";

const ReviewCard = () => {
  const useCon = useContext(context);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [stars, setStars] = useState(4);
  const [showSuc, setshowSuc]=useState(false)
  const [showErr, setshowErr]=useState(false)

  const onclick = async (data) => {
    try {
      const repsonse = await axios.post(
        "http://localhost:8000/uploadRev",
        { ...data, name: useCon.name, stars: stars },
        { withCredentials: true }
      );
      setshowSuc(true);
      useCon.setsucMsg(repsonse.data)
      setTimeout(() => {
        setshowSuc(false)
      }, 2000);
    } catch (error) {
      if (error.repsonse) {
        useCon.setsucMsg(error.repsonse.data)
      } else {
        useCon.setsucMsg(error.message)
      }
      setshowErr(true)
      setTimeout(() => {
        setshowErr(false)
      }, 2000);
      useCon.setsucMsg(null)
    }
  };
  return (
    <div>
      {showSuc && <Success/>}
      {showErr && <Error/>}
      <form
        className="max-w-lg mx-auto my-3 border border-red-500 rounded-xl p-4 bg-gray-800"
        onSubmit={handleSubmit(onclick)}
      >
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-300"
        >
          Let us know your feedback:
        </label>
        <Rating value={stars} onChange={(value) => setStars(value)} />
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a sweet message for us:)"
          {...register("revMsg", { required: "!This cannot be left empty!" })}
        ></textarea>
        {errors.revMsg && (
          <p className="text-red-500 font-bold">{errors.revMsg.message}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer mt-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {isSubmitting ? "Sending" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ReviewCard;
