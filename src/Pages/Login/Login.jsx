import React, { useState } from "react";
import axios from "axios";
import "./login.scss"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { signin } from "../../auth";
import {useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

import {login} from "../../Store/userSlice.js"


const Login = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleChange = (name) => (event) => {
    if (name === "email") {
      setEmail(event.target.value);
    } else if (name === "password") {
      setPassword(event.target.value);
    }
  };
 
  const sendLoginReq = async () => {

    const userLoginDetails = {
      email: email,
      password: password,
    };

    try {

      // signin(userLoginDetails)
      const res = await axios.post(
        "https://heroforfun.herokuapp.com/api/login",
        userLoginDetails
      );

      dispatch(
        login(res.data.user)
      )


      console.log(res.data.user)

    } catch (err) {
      console.log(err); 
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    sendLoginReq()
  }
  return (
    <div className="login">

      <Navbar />

      <div className="form">
        <div className="form_wrapper">
      <form>

      <span className="heading">Sign In</span>

        <input type="email" value={email} onChange={handleChange("email")} placeholder="Email"/>

        <input
          type="password"
          value={password}
          onChange={handleChange("password")}
          placeholder="Password"
        />

        <button onClick={onSubmit}>Sign In</button>
      </form>


      <div className="right">
          <img src="https://www.data-science.ie/wp-content/uploads/2019/01/signup.png" alt="" />
          {/* <div className="heading">
            Hello, Friend!
          </div>
          <p>
            create an account and start journey with us
          </p>

          <p>Alerady a user ?</p> */}
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
