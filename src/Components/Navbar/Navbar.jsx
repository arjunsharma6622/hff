import React, { useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { Menu, Cancel, Close } from "@mui/icons-material";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [toggle, setToggle] = useState(false);

  const handleOpenClick = () => {
    setToggle(!toggle);
  };
  const handleCloseClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <Link
          className={splitLocation[1] === "" ? "link active" : "link"}
          to={"/"}
        >
          <div className="left">HFF</div>
        </Link>

        <div className="right">
          <Link
            className={splitLocation[1] === "" ? "link active" : "link"}
            to={"/"}
          >
            <div className="home">Home</div>
          </Link>

          {/* <Link
            className={splitLocation[1] === "services" ? "link active" : "link"}
            to={"/services"}
          >
            <div className="ourService">Our Services</div>
          </Link> */}

          <Link
            className={splitLocation[1] === "team" ? "link active" : "link"}
            to={"/team"}
          >
            <div className="ourService">Team</div>
          </Link>

          {/* <Link className={splitLocation[1] === "partners" ? "link active" : "link"} to={"/partners"}>
          <div className="ourService">Partnered With</div>
          </Link> */}

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
