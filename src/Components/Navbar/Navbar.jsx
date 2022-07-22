import React, { useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { Menu, Cancel, Close, ChevronRight } from "@mui/icons-material";

const Navbar = ({subpage}) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <Link
          className="link"
          to={"/"}
        >
          <div className="left">
            <img src="./Images/HFF_Logo1.png" alt="j" />
            <span>{subpage ? "Hero For Fun" + " | " + subpage : "Hero For Fun"}</span>
            
            {/* {subpage && (
              <p className="subpage">{ subpage}</p>
            )} */}
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

          <Link className={splitLocation[1] === "supporters" ? "link active" : "link"} to={"/supporters"}>
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
            onClick={() => {
              setToggle(true);
            }}
          />

          {toggle && (
            <div className="menu_list">
              <div className="close">
                <Cancel onClick={() => {setToggle(false)}}/>
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


              <Link className={splitLocation[1] === "supporters" ? "link active" : "link"} to={"/supporters"}>
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
