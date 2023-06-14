import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2023</p>
      <p>Powered By</p>
      <a href="#">
        <img src="icon.svg" alt="Logo artec0der" />
      </a>
    </div>
  );
};

export default Footer;
