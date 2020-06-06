import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';

import "./App.scss";

import routes from "../routes";
import Navigation from './app/navigation/navigation';




const App = () => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Chargement...</div>
  );

  return (
    <div className="container">
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
  );
};

export default App;
