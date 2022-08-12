import React from "react";
import { Link } from "react-router-dom";
import "./serviceCard.scss";

const ServiceCard = ({ img, service_name, to_link, coming_soon }) => {
  return (
    <div className="serviceCard">

      <Link to={to_link} className="link">

      <div className="serviceCardWrapper">
        <div className="service_image">
          <img src={`./Images/${img}`} alt="" />
        </div>

        <div className="service_title">
          <p>{service_name}</p>
        </div>

        {coming_soon && (
          <div className="coming_soon">
            <span>coming soon</span>
          </div>
        )
        }
      </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
