import MenuCSS from "./MenuPage.module.css";
import React, { useState } from "react";

const MenuPage = () => {
  return (
    <header>
      <nav className={MenuCSS.navbar}>
        <p>Logo</p>
        <p>
          <img src="/img/menu.png" alt="menu-logo" />
        </p>
      </nav>
    </header>
  );
};

export default MenuPage;
