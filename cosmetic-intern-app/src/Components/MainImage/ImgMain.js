import ImgCSS from "./ImgMain.module.css";
import React, { useState } from "react";
import HeroSlider, { Overlay, Slide } from "hero-slider";
import Wrapper from "../MainImage/Wrapper";
import Title from "../MainImage/Title";
import Subtitle from "../MainImage/Subtitle";

const img1 = "/img/pic1.jpg";
const img2 = "/img/pic2.jpg";
const img3 = "/img/pic3.jpg";

const ImgMain = () => {
  return (
    <>
      <div className="banner__body">
        <div className={ImgCSS.banner}>
          <HeroSlider
            className={ImgCSS.hero__slider}
            height={"80vh"}
            autoplay
            controller={{
              initialSlide: 1,
              slidingDuration: 500,
              slidingDelay: 100,
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Basic Setup</Title>
                <Subtitle>
                  Check out the documentation for more advanced examples.
                </Subtitle>
              </Wrapper>
            </Overlay>

            <Slide
              // style={{ objectFit: "contain", width: "100%", height: "100%" }}
              background={{
                backgroundImageSrc: img1,
              }}
            />
            <Slide
              // style={{ objectFit: "contain", width: "100%", height: "100%" }}
              background={{
                backgroundImageSrc: img2,
              }}
            />
            <Slide
              // style={{ objectFit: "contain", width: "100%", height: "100%" }}
              background={{
                backgroundImageSrc: img3,
              }}
            />
          </HeroSlider>
        </div>
      </div>
    </>
  );
};

export default ImgMain;
