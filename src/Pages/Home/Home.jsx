import React from "react";
import "./home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="homeContainer">
        <div className="homeContainerWrapper">

        
        <div className="heading">
          <h1 className="title">Hero For Fun</h1>
          <p className="tagline">
          We’re just a bunch of simple men who’re heroes for fun🤙
          </p>
        </div>


        <div className="about">
              <p className="aboutContent1">
              <span>Hero For Fun</span> is a Team Founded by us a bunch of <span>College Students</span> who were bored and kinda had an urge to make our lives interesting by doing something that could make the world a better place. We try working as a team to solve regular day to day problems with <span>modern solutions</span> be it for<span> humans / animals</span>, we always strive towards <span>working for the good</span>.
              </p>
              <p className="aboutContent2">
              Serving our society for the good has always been our Moto and knowing that we gotta get started somewhere, we came up with Hero For Fun, with huge ambitions and visions that we’d do great things if we simply don’t shy away and out ourselves to action out there by getting started.
              </p>
            </div>
      </div>
      </div>
      <Footer />

    </div>
  );
};

export default Home;
