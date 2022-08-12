import React from "react";
import "./supporters.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SupportersCard from "../../Components/SupportersCard/SupportersCard";

const Supporters = () => {
  return (
    <div className="supporters">
      <Navbar />

      <div className="heading">
        <h1>Our Supporters</h1>
      </div>


      <div className="supporters_cards">
        <div className="supporters_cards_wrapper">


        <SupportersCard
            name="Just For U"
            brand_icon="JFU_Logo.png"
            desc="We’re proud to announce that Just For U a well renown brand for toys and appliances for kids and new born is one of our lead sponsors."
            website_Link="https://justforu.in/"
            maps_Link="https://g.page/JFUsecunderabad?share"
          />

          <SupportersCard
            name="Dr. Arathi Arun"
            profile="ArthiArun_HFF.png"
            desc="We’re proud to announce that Common wealth Powerlifting gold medalist
            and Women’s Committee Chairman of Tamilnadu Kickboxing Association Dr. Arathi Arun is one of our Brand Ambassadors."
            facebook_Link="https://www.facebook.com/arathi.arun.13"
            instagram_Link="https://instagram.com/arathi.arun.powerlifter?igshid=YmMyMTA2M2Y="
          />

          <SupportersCard
            name="Dr. Atul Pranay"
            profile="AtulPandey_HFF.png"
            desc="We’re happy to Announce that Dr. Atul a well known doctor in Hyderabad is one of our main supporters in the Animal Emergency System Project, by helping out in many ways from treatment to shelters."
            maps_Link="https://g.co/kgs/vVGfSQ"
          />

          <SupportersCard
            name="Sushyanth Sridhar"
            profile="Sushyanth1_HFF.png"
            desc='We’re proud to announce that Sushyanth Sridhar a young writer who authored the book called "Jon Oliver", and was featured across many platforms like Kuwait TV2,Arab Times, Janam Tv etc is one of our ambassadors and is supporting us on our cause and mission.'
            // maps_Link="https://g.co/kgs/vVGfSQ"
            website_Link="https://amzn.eu/d/9cnyiy0"
            instagram_Link="https://instagram.com/sushyanthsridhar?igshid=YmMyMTA2M2Y="
            linkedin_Link="https://www.linkedin.com/in/sushyanth-sridhar-0360171b5"
          />


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Supporters;
