import MenuPage from "./Components/MenuPage";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import BannerImg from "./Components/BannerImg";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <div className="navbar" onClick={handleOpen}>
        <MenuPage />
      </div>
      {open ? (
        <div className="bg--blur">
          <div className="nav--margin">
            <Navbar />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="bannerimg">
        <BannerImg />
      </div>
    </div>
  );
}

export default App;
