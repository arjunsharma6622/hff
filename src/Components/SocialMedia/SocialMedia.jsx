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
          href="https://www.linkedin.com/in/siddharth-srinivasan-1a7a34202/"
        >
          <span>
            <LinkedIn style={{ fontSize: "50px" }} />
          </span>
        </a>
        <a
          target="_blank"
          className="icons"
          href="https://www.linkedin.com/in/siddharth-srinivasan-1a7a34202/"
        >
          <span>
            <Instagram style={{ fontSize: "50px" }} />
          </span>
        </a>
        <a
          target="_blank"
          className="icons"
          href="https://www.linkedin.com/in/siddharth-srinivasan-1a7a34202/"
        >
          <span>
            <YouTube style={{ fontSize: "50px" }} />
          </span>
        </a>
        <a
          target="_blank"
          className="icons"
          href="https://www.linkedin.com/in/siddharth-srinivasan-1a7a34202/"
        >
          <span>
            <Twitter style={{ fontSize: "50px" }} />
          </span>
        </a>

      </div>
    </div>
  );
};

export default SocialMedia;
