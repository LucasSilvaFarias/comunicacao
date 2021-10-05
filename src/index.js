import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './styled.css'

import App from './Site/home'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);