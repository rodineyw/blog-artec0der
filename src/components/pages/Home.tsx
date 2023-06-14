import React from "react";
import "./../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <img src="logo.svg" alt="Logo artec0der" />
      <img src="rod.png" alt="Imagem minha de Avatar" />
      <h1 className="home__title">Ródiney Wanderson</h1>
      <span>Sobre</span>
      <p>Olá, pode me chamar de Ród.</p>
      <p>Sou Front-end Developer e UI Designer.</p>
      <p>Seja Bem-Vindes ao meu Blog. 👋</p>
    </div>
  );
}

export default Home;
