import HeaderCSS from "./Header.module.css";
import React, { useState } from "react";
import SideBar from "../Sidebar/SideBar";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown((prevState) => (prevState = true));
  }

  function handleClickOut() {
    setIsShown((prevState) => (prevState = false));
  }

  return (
    <>
      <header onClick={handleClickOut}>
        <div className={HeaderCSS["header--position"]}>
          <nav className={HeaderCSS.header}>
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
