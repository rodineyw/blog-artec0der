import { useEffect } from "react";

const Date = () => {
  useEffect(() => {
    var dataAtualElemento = document.getElementById("date");
    var dataAtual = new Date();

    function mesPorExtenso(mes) {
      var meses = [
        "",
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];
      return meses[mes];
    }

    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();

    var mesExtenso = mesPorExtenso(mes);

    var dataFormatada = dia + " de " + mesExtenso + " de " + ano;

    dataAtualElemento.textContent = dataFormatada;
  });
};

export default Date;
