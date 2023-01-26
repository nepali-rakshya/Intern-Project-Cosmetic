import SideBarCSS from "./SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <div className={SideBarCSS.sidebar}>
        <div className={SideBarCSS["sidebar--width"]}>
          <div className={SideBarCSS["sidebar__pages--link"]}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </div>
          <div className={SideBarCSS["sidebar__medias--link"]}>
            <li>
              <img
                src="/img/facebook.png"
                alt="facebook"
                className={SideBarCSS.img}
              />
            </li>
            <li>
              <img
                src="/img/linkedIn.png"
                alt="linkedIn"
                className={SideBarCSS.img}
              />
            </li>
            <li>
              <img
                src="/img/twitter.png"
                alt="twitter"
                className={SideBarCSS.img}
              />
            </li>
            <li>
              <img
                src="/img/facebook.png"
                alt="twitter"
                className={SideBarCSS.img}
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
