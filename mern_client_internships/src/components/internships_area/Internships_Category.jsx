import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Spin from "../alerts&prompts/spin";
import InternshipCard from "../InternshipCard";

const Internships_Category = (props) => {
  const isLoggedin=document.cookie.includes("loginToken")
  const [internships, setInternships] = useState([]);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  isLoggedin && useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.post(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            model: "deepseek/deepseek-chat-v3-0324:free",
            messages: [
              {
                role: "user",
                content:
                  `Give me 12 newly available internships (in ${props.cat}field) in this format: [{ internshipTitle: '', internshipLink: 'actual and valid link so that I could click there and read more about that intern, or apply',internshipImage:'valid image url so that when i use it with img tag in html, it works and gives me a valid image'}]. Only return pure JSON, start your response directly. and text should not be bold or any formatting.`,
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        setInternships(
          JSON.parse(response.data.choices[0].message.content.slice(7, -3))
        );
      } catch (error) {
        alert(error.message);
      }
    };

    fetchInternships();
  }, []);

  return (
    isLoggedin?<div>
      {console.log(internships)}
      {!internships.length && (
        <div className="flex items-center">
          <p >Hold on a while as we load {props.cat}-related internships..</p>
          <Spin />
        </div>
      )}
      <div className="grid grid-cols-3 gap-3">
        {internships &&
          internships.map((internship) => {
            return (
              <div>
                <InternshipCard
                  internshipTitle={internship.internshipTitle}
                  internshipLink={internship.internshipLink}
                  internshipImage={internship.internshipImage}
                />
              </div>
            );
          })}
      </div>
    </div>:<div>You cannot access this page without logging in</div>
  );
};

export default Internships_Category;
