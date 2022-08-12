import React from "react";
import { LinkedIn, Instagram, YouTube, Twitter } from "@mui/icons-material";
import "./socialmedia.scss"


const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <div className="i-icons">
        <a
          target="_blank"
          className="icons"
          href="https://www.linkedin.com/company/hero-for-fun/"
        >
          <span>
            <LinkedIn style={{ fontSize: "50px" }} />
          </span>
        </a>
        <a
          target="_blank"
          className="icons"
          href="https://www.instagram.com/_hero.for.fun_/"
        >
          <span>
            <Instagram style={{ fontSize: "50px" }} />
          </span>
        </a>

      </div>
    </div>
  );
};

export default SocialMedia;
