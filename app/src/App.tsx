import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import routes from "../static/routes";
import Navigation from './navigation/navigation';
import styled, { createGlobalStyle } from 'styled-components';

import "../styles/App.scss";

const App = () => {
  const loading = () => (
    <div>Chargement...</div>
  );

  return (
    <div className="color">
      <div className="container">
        <div className="message-one">En développement</div>
        <Suspense fallback={loading()}>
          <HashRouter basename='/'>
            <Navigation />
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    render={(props: any) => <route.component {...props} />}
                  />
                ) : null;
              })}
            </Switch>
          </HashRouter>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
