
import { Container } from './styled'

import Produto from '../produto'
import { useEffect, useState } from "react"




export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(listar, [])

  function listar() {
    const r = [
      {
        id: 1,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
        titulo: "PC Gamer",
        preco: "R$ 12.584,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 2,
        imagem: "",
        titulo: "mouse",
        preco: "R$ 12.584,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      }
    ]

    setProdutos(r);
  }



  return (
    <Container>

      <h1> Sejam bem-vindos! </h1>
      <br />
      

      <div className="lista-produtos">
        
        {produtos.map(item => 
            <Produto info={item} />
        )}

      </div>


    </Container>
  )

}