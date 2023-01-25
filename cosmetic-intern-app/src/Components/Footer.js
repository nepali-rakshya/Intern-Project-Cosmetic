import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={FooterCSS.footer}>
        <p>
          Copyright 2022&copy; by Data. All Rights Reserved. W3Schools is
          Powered by W3.CSS. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </>
  );
};

export default Footer;
