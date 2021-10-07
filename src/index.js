import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styled.css'


import App from './Site/home'
import DetalheProduto from './Site/detalheProduto'
import Carrinho from './Site/carrinho'



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
