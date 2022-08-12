import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Menu, Cancel, Close, ChevronRight } from "@mui/icons-material";
import axios from "axios";



const Navbar = ({ subpage }) => {


  const splitLocation = pathname.split("/");

  const [toggle, setToggle] = useState(false);


  return (
    <div className="navbar">
      <div className="wrapper">
        <Link className="link" to={"/"}>
          <div className="left">
            <img src="./Images/Logo_HFF.png" alt="j" />
            <span>{subpage && subpage}</span>

          </div>
        </Link>

        <div className="right">
          <Link
            className={splitLocation[1] === "" ? "link active" : "link"}
            to={"/"}
          >
            <div className="home">About</div>
          </Link>

          <Link
            className={splitLocation[1] === "services" ? "link active" : "link"}
            to={"/services"}
          >
            <div className="ourService">Services</div>
          </Link>

          <Link
            className={splitLocation[1] === "team" ? "link active" : "link"}
            to={"/team"}
          >
            <div className="ourService">Team</div>
          </Link>

          <Link
            className={
              splitLocation[1] === "supporters" ? "link active" : "link"
            }
            to={"/supporters"}
          >
            <div className="ourService">Supporters</div>
          </Link>

          <Link
            className={splitLocation[1] === "donate" ? "link active" : "link"}
            to={"/donate"}
          >
            <div className="donate">Donate</div>
          </Link>

          <Link
            className={splitLocation[1] === "contact" ? "link active" : "link"}
            to={"/contact"}
          >
            <div className="contact">Contact</div>
          </Link>

        </div>

        <div className="nav_menu">
          <Menu
            className="open_menu_icon"
            onClick={() => {
              setToggle(true);
            }}
          />

          {toggle && (
            <div className="menu_list">
              <div className="close">
                <Cancel
                  className="close_menu_icon"
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              </div>
              <Link
                className={splitLocation[1] === "" ? "link active" : "link"}
                to={"/"}
              >
                <div className="home">Home</div>
              </Link>

              <Link
                className={
                  splitLocation[1] === "services" ? "link active" : "link"
                }
                to={"/services"}
              >
                <div className="ourService">Our Services</div>
              </Link>

              <Link
                className={splitLocation[1] === "team" ? "link active" : "link"}
                to={"/team"}
              >
                <div className="ourService">Team</div>
              </Link>

              <Link
                className={
                  splitLocation[1] === "supporters" ? "link active" : "link"
                }
                to={"/supporters"}
              >
                <div className="ourService">Supporters</div>
              </Link>

              <Link
                className={
                  splitLocation[1] === "donate" ? "link active" : "link"
                }
                to={"/donate"}
              >
                <div className="donate">Donate</div>
              </Link>

              <Link
                className={
                  splitLocation[1] === "contact" ? "link active" : "link"
                }
                to={"/contact"}
              >
                <div className="contact">Contact</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
