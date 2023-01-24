import { useState } from "react";
import BannerCSS from "./Banner.module.css";
import dataArray from "./menuItem";

const BannerImg = () => {
  const [imgData, setImgData] = useState(dataArray[2]);

  const imageDisplay = imgData.map((items) => {
    return (
      <img
        src={items.img}
        alt=""
        style={{
          width: "100%",
          height: "90vh",
          objectFit: "cover",
        }}
      />
    );
  });

  return (
    <div className={BannerCSS.img}>
      {console.log(imgData)}
      {imageDisplay}
    </div>
  );
};

export default BannerImg;
