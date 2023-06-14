import React from "react";
import "../styles/Post.scss";

const Card = () => {
  return (
    <div className="page">
      <p></p>
      <h1 className="title-post">
        A Jornada Empolgante no Desenvolvimento Web
        <span> .</span>
      </h1>
      <a href="#">
        <img src="capa.png" alt="Imagem de capa" />
        <h2>Bem-vindos ao meu mundo digital! 🚀✨</h2>
        <p>
          E aí, pessoal! Estou super animado para compartilhar com vocês o
          lançamento do meu blog pessoal, onde vou mergulhar fundo no universo
          do desenvolvimento web e tudo que envolve essa incrível arte de criar
          experiências digitais cativantes. 🎉🎨
        </p>
      </a>
    </div>
  );
};

export default Card;
