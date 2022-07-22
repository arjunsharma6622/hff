import React from "react";
import "./supporters.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SupportersCard from "../../Components/SupportersCard/SupportersCard";

const Supporters = () => {
  return (
    <div className="supporters">
      <Navbar />
      <div className="supporters_cards">
        <div className="supporters_cards_wrapper">
          <SupportersCard
            name="Dr.Atul"
            profile="Siddharth_HFF.png"
            desc="Hero For Fun is a Team Founded by us, a bunch of College Students who were bored and kind of had an urge to make our lives interesting by doing something that could make the world"
            maps_Link="https://g.page/JFUsecunderabad?share"
            ph1="+91 9700812822"
            ph2="+91 8555961552"
          />

          <SupportersCard
            name="NIT Warangal"
            brand_icon="National_Institute_of_Technology,_Warangal_logo.png"
            desc="Hero For Fun is a Team Founded by us, a bunch of College Students who were bored and kind of had an urge to make our lives interesting by doing something that could make the world"
            website_Link="https://justforu.in/"
            facebook_Link="xyz"
            maps_Link="https://g.page/JFUsecunderabad?share"
          />

          <SupportersCard
            name="Arjun Sharma"
            profile="Arjun_HFF.png"
            desc="Hero For Fun is a Team Founded by us, a bunch of College Students who were bored and kind of had an urge to make our lives interesting by doing something that could make the world"
            maps_Link="https://g.page/JFUsecunderabad?share"
            instagram_Link="xyz"
            facebook_Link="xyz"
          />

          <SupportersCard
            name="Just For U"
            brand_icon="JFU_Logo.png"
            desc="Hero For Fun is a Team Founded by us, a bunch of College Students who were bored and kind of had an urge to make our lives interesting by doing something that could make the world"
            website_Link="https://justforu.in/"
            facebook_Link="xyz"
            maps_Link="https://g.page/JFUsecunderabad?share"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Supporters;
