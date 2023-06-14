import React from "react";
import "./globalStyle.scss";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Footer from "./components/pages/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Home />
        <Post />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
