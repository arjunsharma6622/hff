import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { signup } from "../../auth";

const Register = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    username : "", email : "", password : ""
  })

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleChange = (event) => {
      setUser({...user, [event.target.name] : event.target.value})
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const {username, email, password} = user

    const userRegisterDetails = {
      username: username,
      email: email,
      password: password,
    };

    try {
      // const register_res = await axios.post(
      //   "http://localhost:8000/api/register",
      //   userRegisterDetails
      // );

      signup(userRegisterDetails)

      setRegisterSuccess(true);
      navigate("/login")

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <Navbar />
      <div className="form">
      <div className="form_wrapper">
        <div className="left">
          <img src="https://www.data-science.ie/wp-content/uploads/2019/01/signup.png" alt="" />
        </div>
        <form>
          <span className="heading">SignUp</span>

          <input 
            type="name"
            name="username" 
            value={user.username} 
            onChange={handleChange}
            placeholder="Full Name"
          />

          <input 
            type="email" 
            name="email"
            value={user.email} 
            onChange={handleChange} 
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button onClick={onSubmit}>Sign Up</button>
        </form>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
