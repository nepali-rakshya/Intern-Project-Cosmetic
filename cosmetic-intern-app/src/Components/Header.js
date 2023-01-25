import HeaderCSS from "./Header.module.css";
import React, { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown((prevState) => (prevState = true));
  }

  function handleClickOut() {
    setIsShown((prevState) => (prevState = false));
  }

  // function changeBgColor(e) {
  //   e.target.style.background = "rgba(255, 255, 255, 0.452)";
  // }

  // function changeBgColorAgain(e) {
  //   e.target.style.background = "transparent";
  // }

  return (
    <>
      <header onClick={handleClickOut}>
        <div className={HeaderCSS["header--position"]}>
          <nav
            className={HeaderCSS.header}
            // onMouseEnter={changeBgColor}
            // onMouseLeave={changeBgColorAgain}
          >
            <div className={HeaderCSS.header__logo}>
              <a href="#">LOGO</a>
            </div>
            <div onMouseEnter={handleClick}>
              <button className={HeaderCSS.header__button}>
                <img src="/img/menu1.png" alt="menu-button" />
              </button>
            </div>
          </nav>
        </div>
        {isShown && <SideBar />}
      </header>
    </>
  );
};

export default Header;
