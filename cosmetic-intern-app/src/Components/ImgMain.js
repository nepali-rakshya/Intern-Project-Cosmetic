import ImgCSS from "./ImgMain.module.css";
import React, { createRef, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";

const bogliasco =
  "https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
const countyClare =
  "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";
const craterRock =
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

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
