import HeaderCSS from "./Header.module.css";

const Header = () => {
  function changeBgColor(e) {
    e.target.style.background = "pink";
  }

  function changeBgColorAgain(e) {
    e.target.style.background = "transparent";
  }

  return (
    <>
      <header>
        <div className={HeaderCSS["header--position"]}>
          <nav
            className={HeaderCSS.header}
            onMouseEnter={changeBgColor}
            onMouseLeave={changeBgColorAgain}
          >
            <div className={HeaderCSS.header__logo}>
              <a href="#">LOGO</a>
            </div>
            <button className={HeaderCSS.header__button}>
              <img src="/img/menu.png" alt="menu-button" />
            </button>
          </nav>
        </div>

        <div></div>
      </header>
    </>
  );
};

export default Header;
