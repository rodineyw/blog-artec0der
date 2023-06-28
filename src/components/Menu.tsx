import React from "react";
import "./styles/Menu.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Error from "./pages/Error";

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="menu__item">
          <button className="btn">
            <a href="#">Home</a>
          </button>
        </li>
        <li className="menu__item">
          <button className="btn">
            <a href="#">Contato</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
