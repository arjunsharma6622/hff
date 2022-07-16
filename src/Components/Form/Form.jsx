import "./form.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { KeyboardArrowRight } from "@mui/icons-material";
import SocialMedia from "../SocialMedia/SocialMedia";
// toast.

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b6dphpg",
        "template_0mohm4m",
        form.current,
        "vMuEGIiT3GcaIzOWR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("message sent", { autoClose: 1000 });
    setInterval(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="contact_form">
      <div className="contact_form_wrapper">

        <div className="middle">
          <p>Drop us a line</p>
        </div>
         
        <div className="bottom">
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="b_top">
              <input
                type="text"
                name="user_name"
                required="true"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="user_email"
                required="true"
                placeholder="Your Email"
              />
            </div>
            <textarea
              name="message"
              required="true"
              placeholder="Your Message"
            />
            <input type="submit" value="Send" className="button" />
          </form>
        </div>



        <div className="top">
          <span>Follow us on</span>
          <SocialMedia />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
