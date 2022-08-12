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

        <div className="aes_intro_bottom">

        <div className="service_desc">
          <span>
        Whenever there’s an animal emergency, all you got to do is reach out to one of the numbers mentioned and we’d coordinate and connect u with the nearest transport and hospital facility for the animal.
        </span>
        </div>

        <div className="contact">
          {/* Contact */}
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
      </div>

      <div className="aes_content">
        <div className="aes_content_wrapper">
        {/* <p className="p1">
        In our country, we’ve got more then 80 million homeless dogs and cats and according to reports more then 10 million of them are hit by cars, disclaimer in Australia, so the Indian numbers shouldn’t be surprising. In 2020-21, the NMC recorded 3,442 stray animals injured in road accidents, while the figure was 4,262 in 2019-20. The NMC official admitted that the actual number of animals getting injured could be much more as many people don't bother to inform the civic body whenever a road accident happens.Like you expect me to believe India’s conditions are better then Australia’s.
        </p> */}

        <p className="p2">
        Whenever a human being is in an emergency, we’ve got ambulances to rush him/her. Then why not the same for voiceless animals, who cannot describe the sort of pain they’re going through.
        </p>

        {/* <p className="p3">
        It all started on the 26th of June 2022, when Siddharth saw a bus run over a dog right in front of his eyes and went to its rescue, he took it to a side of the road and tried reaching out for help with transportation to rush the dog to the nearest hospital, but sadly there weren’t any drivers willing to take an animal for help, let alone injured. Even on the internet looking for animal rescue units/ambulances he had no luck, and trying to keep it alive until help could arrive by hydrating it simply ended up watching it take its last breath.
        </p>

        <p className="p4">
        Realising this is quite a frequent problem our country faces where animals tend to die dirty devastating deaths and go through horrific injuries, we Hero For Fun have come up with this project of an Animal Emergency System.
        </p> */}

        <div className="process">

        <p className="p5">
        In this project we as a team worked on making the transportation readily available for animals in case of an emergency by roaming around the city and collaborating with willing auto drivers to help in rushing injured animals.We’ve also spoken and tied up with multiple Veterinary Hospitals across the city of Hyderabad for subsidised treatment of these homeless animals incase of an emergency also understanding the challenges they face as doctors and thus have earned their support for this cause as well.
        </p>

        <p className="p6">
        Thus, whenever there’s an animal emergency, all you got to do is reach out to one of the numbers mentioned above and we’d coordinate and connect u with the nearest transport and hospital facility for the animal.
        </p>

        <p className="p7">
        We run on donations and would be ready to make payments for all the treatments and transportation but people willing to take the expenses upon them are always welcomed and respected.
        </p>
        </div>

        </div>


      </div>

      <Footer />
    </div>
  );
};

export default AnimalEmergencySystem;
