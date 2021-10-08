import { useState } from "react"
import {useHistory} from 'react-router-dom';

export default function Pai() {
  const [qtd, setQtd] = useState(0);
  const navigation = useHistory();
  
  function voltar() {
    navigation.push('/')
  }

  function contar() {
    setQtd(qtd + 1);
  }

  function resetar(x) {
    setQtd(x);
  }

  return (
    <div className="container">
      <h1> Contador </h1>
       
        <button onClick={voltar}> Voltar </button>

        <div> {qtd} </div>

        <button onClick={contar}> Contar </button>
        <Filho onReset={resetar} qtd={qtd}  />

    </div>
  )
}


function Filho(props) {
  function resetar() {
    props.onReset(0);
  }

  return (
    <div className="container2">
        <button onClick={resetar}> Resetar </button>
        <div> {props.qtd} </div>
    </div>
  )
}