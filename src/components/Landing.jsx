import React, { useState } from "react";
import "./Landing.css";
import LemonLime from "../assets/lemonade.png";
import BlueRaspberry from "../assets/blueraspberry.png";
import TropicalPunch from "../assets/tropical-punch.png";
import MetaMoon from "../assets/metamoon.png";
import StrawBerry from "../assets/strawberry-watermelon.png";

function Landing() {
  const [image, setImage] = useState(LemonLime);

  const handleLemonClick = () => {
    document.body.style.backgroundColor = "#fdfa65";
    setImage(LemonLime);
  };

  const handleBlueClick = () => {
    document.body.style.backgroundColor = "#37bff1";
    setImage(BlueRaspberry);
  };

  const handleMetaClick = () => {
    document.body.style.backgroundColor = "#f6f6f6";
    setImage(MetaMoon);
  };

  const handleTropicalClick = () => {
    document.body.style.backgroundColor = "#F74247";
    setImage(TropicalPunch);
  };

  const handleStrawClcik = () => {
    document.body.style.backgroundColor = "#f8a4cb";
    setImage(StrawBerry);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <img src={image} className="img" alt="..." />
        <div className="content-col">
          <h1 className="span">STAY HYDRATE</h1>
          <h1 className="span1">STAY PRIME</h1>
          <p>
            PRIME was developed to fill the void where great taste meets
            function. With bold, thirst-quenching flavors to help you refresh,
            replenish, and refuel, PRIME is the perfect boost for any endeavor.
            We're confident you'll love it as much as we do.
          </p>
        </div>
      </div>
      <div className="footer">
        <img
          src={LemonLime}
          onClick={handleLemonClick}
          className="img-footer"
          alt=""
        />
        <img
          src={BlueRaspberry}
          onClick={handleBlueClick}
          className="img-footer"
          alt=""
        />
        <img
          src={MetaMoon}
          onClick={handleMetaClick}
          className="img-footer"
          alt=""
        />
        <img
          src={StrawBerry}
          onClick={handleStrawClcik}
          className="img-footer"
          alt=""
        />
        <img
          src={TropicalPunch}
          onClick={handleTropicalClick}
          className="img-footer"
          alt=""
        />
      </div>
    </div>
  );
}

export default Landing;
