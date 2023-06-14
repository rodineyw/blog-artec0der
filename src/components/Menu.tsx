import React from "react";
import "./styles/Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li className="menu__item">
          <Link to="/">
            <button className="btn">Home</button>
          </Link>
        </li>
        <li className="menu__item">
          <Link to="contato">
            <button className="btn">Contato</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
