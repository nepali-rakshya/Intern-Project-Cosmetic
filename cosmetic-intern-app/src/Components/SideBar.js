import SideBarCSS from "./SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <div className={SideBarCSS.sidebar}>
        <div className={SideBarCSS["sidebar--width"]}>
          <div className="sidebar__page--link">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </div>
          <div className="sidebar__meidas--link">
            <li>
              <img src="/img/facebook.png" alt="facebook" />
            </li>
            <li>
              <img src="/img/linkedIn.png" alt="linkedIn" />
            </li>
            <li>
              <img src="/img/twitter.png" alt="twitter" />
            </li>
            <li>
              <img src="/img/facebook.png" alt="twitter" />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
