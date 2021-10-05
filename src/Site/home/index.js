import { Container } from "./styled";
import Produto from "../produto";
import { useEffect, useState } from "react";

export default function Index() {
  const [produtos, setProdutos] = useState([]);

  useEffect(listar, []);

  function listar() {
    const r = [
      {
        id: 10001,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
        titulo: "PC Gamer",
        preco: "R$ 12.584,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!",
      },
      {
        id: 10002,
        imagem: "https://img.terabyteshop.com.br/produto/g/mouse-redragon-gamer-cobra-chroma-m711-7-botoes-programaveis-10000-dpi-rgb-preto_47024.jpg",
        titulo: "Mouse Daora",
        preco: "R$ 134,37",
        descricao: "O mouse gamer Cobra Chroma da Redragon, traz diversos fatores que ajudam os gamers, além da maior velocidade para executar seus movimentos, com os 10.000 DPI, ele é ergonômico trazendo conforto em sua “pegada” para os destros.",
        especificacoes: "é um mouse, e tem RGB",
      },
    ];

    setProdutos(r);
  }

  return (
    <Container>
      <h1> Sejam bem-vindos! </h1>
      <br />

      <div className="lista-produtos">
        {produtos.map((item) => (
          <Produto info={item} />
        ))}
      </div>
    </Container>
  );
}
