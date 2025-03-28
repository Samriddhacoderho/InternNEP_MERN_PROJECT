import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import InternshipPage_Dialog from "./internships_area/InternshipPage_Dialog";
import InternshipPage_Gallery from "./internships_area/InternshipPage_Gallery";
import InternshipPage_Card from "./internships_area/InternshipPage_Card";
import axios from "axios";

const Internship = () => {
  const [open, setOpen] = useState(true);
  const [ans,setResponse]=useState(null)
  const arr=[
    {
      internship_name:"Health and Medical Internships",
      internship_body:"Health and medical internships provide hands-on experience for students and aspiring professionals in healthcare. These internships can take place in hospitals, clinics, research labs, or public health organizations. Interns gain practical skills in patient care, medical research, and healthcare administration. They also learn about ethical practices, teamwork, and the daily challenges of medical professionals. Some internships are paid, while others offer valuable mentorship and networking opportunities. Medical internships help students explore career paths in medicine, nursing, or healthcare technology. They also strengthen resumes and improve chances of admission to medical schools or advanced healthcare programs.",
      internship_url:"https://timess3spore.s3.amazonaws.com/ndata/et_images/mobile_image_webp/c46f702a93d14937d926259e13c205a5Revised-Nepal-story-photo.webp",
      toRef:"/internships/health"
    },
    {
      internship_name:"Web Development Internships",
      internship_body:"Work on real-world projects, developing and optimizing websites using HTML, CSS, JavaScript, and frameworks like React or Angular. Collaborate with designers and backend developers to create responsive, user-friendly interfaces. Improve coding skills, debugging techniques, and problem-solving abilities while gaining practical experience in front-end and back-end web development.",
      internship_url:"https://setmycareer.com/resources/images/web-developer-header.webp",
      toRef:"/internships/webdev"
    },
    {
      internship_name:"Mobile Development Internships",
      internship_body:"Build mobile applications for iOS and Android using Swift, Kotlin, Flutter, or React Native. Learn UI/UX design principles, API integration, and app deployment processes. Collaborate with teams to develop, test, and improve mobile apps. Gain hands-on experience in the fast-growing mobile development industry.",
      internship_url:"https://newxel.com/wp-content/uploads/2022/08/mobile-app-developer-skills.jpeg",
      toRef:"/internships/mobdev"
    },
    {
      internship_name:"Software Development Internships",
      internship_body:"Participate in full-cycle software development, including coding, debugging, and testing. Work with programming languages like Java, Python, or C++. Contribute to real projects, learning best practices in agile development, version control, and software design. Enhance problem-solving skills while working alongside experienced engineers.",
      internship_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ayaL1Y2RVd0SjsoaFwDsjCXRP6Uk1Kjk6w&s",
      toRef:"/internships/sofdev"
    },
    {
      internship_name:"Content Writer Internships",
      internship_body:"Create engaging, well-researched articles, blogs, and social media content. Develop SEO skills and improve writing techniques. Work on diverse topics, enhancing creativity and communication. Collaborate with marketing teams to craft compelling narratives. Perfect for students passionate about writing and digital content creation.",
      internship_url:"https://www.sincera.in/wp-content/uploads/2016/12/Content-Writing-1080x675.jpg",
      toRef:"/internships/content-writing"
    },
    {
      internship_name:"Content Creator Internships",
      internship_body:"Design and produce multimedia content, including videos, graphics, and social media posts. Enhance storytelling, editing, and branding skills. Work on creative projects, learning to engage online audiences effectively. Gain hands-on experience in content strategy, digital marketing, and audience growth.",
      internship_url:"https://cdn.imeanmarketing.com/wp-content/uploads/2021/02/How-to-become-a-content-writer-header-image.png",
      toRef:"/internships/content-creator"
    },
    {
      internship_name:"Teacher’s Assistant Internships",
      internship_body:"Support educators by assisting in lesson planning, grading, and classroom management. Help students with assignments and reinforce learning concepts. Develop teaching, communication, and organizational skills. Gain valuable mentorship experience, preparing for a career in education.",
      internship_url:"https://skillpointe.com/sites/default/files/styles/max_1300x1300/public/2020-08/Teacher%20assistant.jpg.webp?itok=QSL9Sv9l",
      toRef:"/internships/teachers-assistant"
    },
    {
      internship_name:"Graduate Assistant Internships",
      internship_body:"Assist professors in research, grading, and administrative tasks. Engage in academic projects, data analysis, and mentoring undergraduate students. Strengthen research, leadership, and teaching skills. Ideal for graduate students looking to gain hands-on experience in academia while contributing to scholarly work.",
      internship_url:"https://www.gse.upenn.edu/sites/default/files/penngse_graduate_assistant_students_feature_0.jpg",
      toRef:"/internships/graduates-assistant"
    }
  ]
  return (
    <div>
      <InternshipPage_Dialog dialog_state={open} dialog_setState={setOpen} />
      <InternshipPage_Gallery />
      {arr.map((a) => {
        return <InternshipPage_Card internship_name={a.internship_name} internship_body={a.internship_body} internship_url={a.internship_url} toRef={a.toRef} />;
      })}
    </div>
  );
};

export default Internship;
