import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/views/Home';
import Login from 'src/views/Login';
import Subscribe from 'src/views/Subscribe';
import Calendario from 'src/views/Calendario';

const Routes = () => {
  if (window.location.pathname === "/clogin"
  || window.location.pathname === "/csubscribe"
  || window.location.pathname === "/calendario") document.title = "Calendario";
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clogin" component={Login} />
        <Route exact path="/csubscribe" component={Subscribe} />
        <Route exact path="/calendario" component={Calendario} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
