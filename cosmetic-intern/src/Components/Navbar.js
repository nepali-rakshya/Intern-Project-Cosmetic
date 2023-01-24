import data from "./menuItem";
import NavCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={NavCSS.sidebar}>
      <nav className={NavCSS.menus}>
        {data[0].map((menu, index) => {
          return (
            <li className={NavCSS.menu__list} key={index}>
              <a href={menu.url} className={NavCSS["menu--list"]}>
                {menu.title}
              </a>
            </li>
          );
        })}
      </nav>
      <nav className={NavCSS.icons}>
        {data[1].map((icons, index) => {
          return (
            <li className={NavCSS.icon__list} key={index}>
              <img src={icons.img} alt="" style={{ width: "35px" }} />
            </li>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
