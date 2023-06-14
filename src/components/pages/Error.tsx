import { Bug, Link } from "@phosphor-icons/react";
import React from "react";

const Error = () => {
  return (
    <div>
      <Bug size={32} />
      <h1>Oops... Página não encontrada.</h1>
      <p>A página que você está procurando não existe</p>
      <p>
        Clique <a href="#">aqui</a> para retornar para o Inicio.
      </p>
    </div>
  );
};

export default Error;
