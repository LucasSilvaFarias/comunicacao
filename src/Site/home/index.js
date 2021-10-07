import { Container } from "./styled";
import Produto from "../produto";
import { useEffect, useState } from "react";

export default function Index() {
  const [produtos, setProdutos] = useState([]);

  useEffect(listar, []);

  function listar() {
    const r = [
      {
        id: 1,
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
