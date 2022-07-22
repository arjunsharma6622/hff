import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./animalEmergencySystem.scss";
import { Call } from "@mui/icons-material";

const AnimalEmergencySystem = () => {
  return (
    <div className="AnimalEmergencySystem">
      <Navbar subpage=" Animal Emergency" />

      <div className="aes_wrapper">
        <div className="heading">
          <div className="image">
            <img src="./Images/Animal_Emergency_System.jpeg" alt="" />
          </div>
          <h1>Got an Animal Emergency ? </h1>
        </div>

        <div className="contact">
          Contact
          <div className="numbers">
            <div>
              <span>
                <Call />
              </span>{" "}
              9989377753
            </div>
            <div>
              <span>
                <Call />
              </span>{" "}
              9866558963
            </div>
            <div>
              <span>
                <Call />
              </span>{" "}
              9700812822
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnimalEmergencySystem;
