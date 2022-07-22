import React from "react";
import "./teamMemberCard.scss";
import { LinkedIn, Instagram, Twitter } from "@mui/icons-material";

const TeamMemberCard = ({
  name,
  role,
  img,
  linkedIn_link,
  Ig_link,
  Twitter_link,
}) => {
  return (
    <div className="teamMemberCard">
      <div className="card_wrapper">
        <div className="photo">
          <img src={`./Images/Team/${img}`} alt="" />
        </div>

        <div className="name">{name}</div>

        <div className="role">
          <span>{role}</span>
        </div>

        <div className="team_member_socialMedia">
          {linkedIn_link && (
            <a target="_blank" className="icons" href={linkedIn_link}>
              <span>
                <LinkedIn style={{ fontSize: "25px" }} />
              </span>
            </a>
          )}

          {Ig_link && (
            <a target="_blank" className="icons" href={Ig_link}>
              <span>
                <Instagram style={{ fontSize: "25px" }} />
              </span>
            </a>
          )}

          {Twitter_link && (
            <a target="_blank" className="icons" href={Twitter_link}>
              <span>
                <Twitter style={{ fontSize: "25px" }} />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
