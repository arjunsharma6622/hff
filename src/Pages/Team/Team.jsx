import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TeamMemberCard from "../../Components/TeamMemberCard/TeamMemberCard";
import "./team.scss";

const Team = () => {
  return (
    <div className="team">
      <Navbar />

      <div className="heading">
        <h1>Our Team</h1>
      </div>

      <div className="members_container">
        <div className="members_container_wrapper">
          <TeamMemberCard
            name="Siddharth Srinivasan"
            role="Founder"
            img="Siddharth_HFF.png"

            linkedIn_link="https://www.linkedin.com/in/siddharth-srinivasan-1a7a34202/"
            Twitter_link="https://twitter.com/Siddharth_oo8"
            Ig_link="https://www.instagram.com/siddharth_oo8/"
          />

          <TeamMemberCard
            name="Arjun Sharma"
            role="Founder"
            img="Arjun_HFF.png"

            linkedIn_link="https://www.linkedin.com/in/arjun-sharma-250906226/"
            Twitter_link="https://twitter.com/ArjunSharma6622"
            Ig_link="https://www.instagram.com/arjunsharma_6622/"
          />

          <TeamMemberCard
            name="Aayush Kulkarni"
            role="WebDeveloper"
            img="Aayush_HFF.png"

            linkedIn_link="https://www.linkedin.com/in/aayush-kulkarni-5a92561aa"
            Twitter_link="https://twitter.com/AayushK_27"
            Ig_link="https://instagram.com/aayush_k_27"
          />

          <TeamMemberCard 
            name="Maachana Aneesh" 
            role=" " 
            img="Aneesh2_HFF.png" 

            // linkedIn_link=""
            Twitter_link="https://twitter.com/M_AnEeSh15"
            Ig_link="https://www.instagram.com/aneesh_1512/"
          />

          {/* <TeamMemberCard
            name="Harshel Srinivasan"
            role="Photographer"
            img="Harshel_HFF.png"

            // linkedIn_link=""
            Twitter_link="https://twitter.com/_Harshel88?t=-g32ZrzTMT7O2bnL43iGNg&s=09"
            Ig_link="https://www.instagram.com/_harshel.25/"
          /> */}
          
          <TeamMemberCard
            name="S.B. Avinash"
            role=" "
            img="Avinash_HFF.png"

            // linkedIn_link=""
            Twitter_link="https://mobile.twitter.com/Avinash78072864"
            Ig_link="https://www.instagram.com/_avinash_sb/"
          />

          <TeamMemberCard
            name="Kolli Krupakar"
            role="Design"
            img="Krupakar_Hff.jpg"

            // linkedIn_link=""
            Twitter_link="https://mobile.twitter.com/Kolli11279846"
            Ig_link="https://instagram.com/_fn_2187?igshid=YmMyMTA2M2Y="
          />

          <TeamMemberCard
            name="Neel Lohith"
            role=" "
            img="Lohith_HFF.png"

            linkedIn_link="http://www.linkedin.com/in/neel-lohith-2a592b211"
            Ig_link="https://www.instagram.com/heywassup_naka/"
          />

          <TeamMemberCard
            name="Tanishq Arun"
            role=" "
            img="Tanishq_HFF.png"

            Ig_link="https://instagram.com/tanishqarun?igshid=YmMyMTA2M2Y="
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
