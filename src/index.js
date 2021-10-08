import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styles.css'


import App from './Site/Home'
import Compra from './Site/Compra'
import DetalheProduto from './Site/detalheProduto'
import Carrinho from './Site/carrinho'
import Contador from './Site/Props/contador'



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}  component={App}            />
        <Route path="/compras"        component={Compra}         />
        <Route path="/detalhe"        component={DetalheProduto} />
        <Route path="/carrinho"       component={Carrinho}       />
        <Route path="/contador"       component={Contador}       />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
