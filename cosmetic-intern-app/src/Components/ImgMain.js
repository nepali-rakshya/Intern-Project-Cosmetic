import ImgCSS from "./ImgMain.module.css";
import React, { createRef, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";
import Background from "hero-slider/dist/components/Slide/Background";

const img1 = "/img/pic1.jpg";
const img2 = "/img/pic2.jpg";
const img3 = "/img/pic3.jpg";
const img4 = "/img/pic4.jpg";
const img5 = "/img/pic5.jpg";

const ImgMain = () => {
  return (
    <>
      <div className={ImgCSS.banner}>
        <HeroSlider
          width={"100vw"}
          height={"80vh"}
          autoplay
          controller={{
            slidingAnimation: "left_to_right",
            orientation: "horizontal",
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            //   onSliding: (nextSlide) =>
            //     console.debug("onSliding(nextSlide): ", nextSlide),
            //   onBeforeSliding: (previousSlide, nextSlide) =>
            //     console.debug(
            //       "onBeforeSliding(previousSlide, nextSlide): ",
            //       previousSlide,
            //       nextSlide
            //     ),
            //   onAfterSliding: (nextSlide) =>
            //     console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          <Slide
            background={{
              backgroundImageSrc: img1,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: img2,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: img3,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: img4,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: img5,
            }}
          />
        </HeroSlider>
      </div>
    </>
  );
};

export default ImgMain;