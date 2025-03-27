import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
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
                "Give me 10 internships (in IT, Health, etc.) in this format: [{ internshipTitle: '', internshipLink: 'actual and valid link so that I could click there and read more about that intern, or apply', internshipImage:'give some image url, it could be any image url'}]. Only return pure JSON, start your response directly. and text should not be bold or any formatting.",
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
      setInternships(JSON.parse(response.data.choices[0].message.content.slice(7,-3)))
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(fetchInternships)}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Clicking Me" : "Click Me"}
        </button>
      </form>
      {internships && internships.map((internship)=>{
        return(
          <div>
          <h3 className="font-bold">{internship.internshipTitle}</h3>
          <a href={internship.internshipLink} target="_blank">Click Here</a>
          <img src={internship.internshipImage} alt="error"/>          
          </div>
        )
      })}
    </div>
  );
};

export default Internship;
