import nodemailer from "nodemailer";

const email_controller = async (req, res) => {
  const { to, subject, text } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to:to,
    subject:subject,
    text:text
  };
  try {
    console.log("sdjisj")
    await transporter.sendMail(mailOptions);
    res.json({"success_msg":"Email Send Successfully"})
  } catch (error) {
    res.status(404).send(error.message) 
  }
};

export default email_controller
