import {
  Facebook,
  Flip,
  Instagram,
  Map,
  OpenInNew,
  Place,
  RotateRight,
  ThreeSixty,
} from "@mui/icons-material";
import { color, style } from "@mui/system";
import React from "react";
import { useState } from "react";
import "./supportersCard.scss";

const SupportersCard = ({
  name,
  brand_icon,
  profile,
  desc,
  ph1,
  ph2,
  website_Link,
  maps_Link,
  facebook_Link,
  instagram_Link,
}) => {

  const [flip, setFlip] = useState(false)
  return (
    <div className="supportersCard">
      <div className={flip?"active supporterCard_Wrapper" : "supporterCard_Wrapper"}>
        <div className="active"></div>
        <div className="front">
          {brand_icon && (
            <div className="supporterBrandIcon">
              <img src={`./Images/Supporters/Brands/${brand_icon}`} alt="" />
            </div>
          )}

          {profile && (
            <div className="supporterProfile">
              <img src={`./Images/Supporters/People/${profile}`} alt="" />
            </div>
          )}

          <div className="supporterName">
            <p>{name}</p>
          </div>

          <div className="more">
            <div className="supporterLinks">
              {website_Link && (
                <a target="_blank" className="icons" href={website_Link}>
                  <span>
                    <OpenInNew style={{ fontSize: "25px" }} />
                  </span>
                </a>
              )}

              {maps_Link && (
                <a target="_blank" className="icons" href={maps_Link}>
                  <span>
                    <Place style={{ fontSize: "25px" }} />
                  </span>
                </a>
              )}

              {facebook_Link && (
                <a target="_blank" className="icons" href={facebook_Link}>
                  <span>
                    <Facebook style={{ fontSize: "25px" }} />
                  </span>
                </a>
              )}

              {instagram_Link && (
                <a target="_blank" className="icons" href={instagram_Link}>
                  <span>
                    <Instagram style={{ fontSize: "25px" }} />
                  </span>
                </a>
              )}
            </div>
          </div>

          <div className="flip">
            <span><RotateRight style={{ fontSize: "20px" }} onClick={() => {setFlip(!flip)}}/></span>
          </div>
        </div>

      <div className="back">
        <div className="desc">
          {desc}
          <div className="supportersNumbers">
            {ph1 && <p>{ph1}</p>}
            {ph2 && <p>{ph2}</p>}
          </div>
        </div>

        <div className="flip">
            <span><RotateRight style={{ fontSize: "20px" }} onClick={() => {setFlip(!flip)}}/></span>
          </div>
      </div>
      </div>

    </div>
  );
};

export default SupportersCard;
