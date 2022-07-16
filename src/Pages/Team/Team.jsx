import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TeamMemberCard from "../../Components/TeamMemberCard/TeamMemberCard";
import "./team.scss";

const Team = () => {
  return (
    <div className="team">
      <Navbar />

      <div className="members_container">
        <div className="members_container_wrapper">
          <TeamMemberCard
            name="Siddharth"
            role="Founder"
            img="Siddharth_HFF.png"
          />
          <TeamMemberCard
            name="Arjun Sharma"
            role="WebDeveloper, Founder"
            img="Arjun_HFF.png"
          />

          <TeamMemberCard
            name="Aayush"
            role="WebDeveloper"
            img="Arjun_HFF.png"
          />

          <TeamMemberCard 
            name="Aneesh" 
            role="Strategic Relations" 
            img="Aneesh2_HFF.png" 
          />
          <TeamMemberCard
            name="Harshel"
            role="Photographer"
            img="Siddharth_HFF.png"
          />
          <TeamMemberCard
            name="Avinash"
            role="Public Relations"
            img="Avinash_HFF.png"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
