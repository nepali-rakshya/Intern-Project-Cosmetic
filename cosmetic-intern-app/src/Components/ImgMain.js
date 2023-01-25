import ImgCSS from "./ImgMain.module.css";
import React, { createRef, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const ImgMain = () => {
  return (
    <>
      <div className={ImgCSS.banner}>
        <HeroSlider
          height={"100vh"}
          autoplay
          controller={{
            slidingAnimation: "left_to_right",
            orientation: "horizontal",
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          <Slide
            background={{
              backgroundImageSrc: bogliasco,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: countyClare,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: craterRock,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: giauPass,
            }}
          />
        </HeroSlider>
      </div>
    </>
  );
};

export default ImgMain;
