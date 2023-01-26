import ImgCSS from "./ImgMain.module.css";
import React, { useState } from "react";
import HeroSlider, { Slide } from "hero-slider";

const img1 = "/img/pic1.jpg";
const img2 = "/img/pic2.jpg";
const img3 = "/img/pic3.jpg";

const ImgMain = () => {
  return (
    <>
      <div className={ImgCSS.banner}>
        <HeroSlider
          className={ImgCSS.hero__slider}
          height={"70vh"}
          autoplay
          controller={{
            slidingAnimation: "left_to_right",
            orientation: "horizontal",
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
          }}
        >
          <Slide
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            background={{
              backgroundImageSrc: img1,
            }}
          />
          <Slide
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            background={{
              backgroundImageSrc: img2,
            }}
          />
          <Slide
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            background={{
              backgroundImageSrc: img3,
            }}
          />
        </HeroSlider>
      </div>
    </>
  );
};

export default ImgMain;
