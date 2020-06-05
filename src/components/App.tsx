import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./App.scss";

import routes from "../routes";
import Navigation from './app/navigation/navigation';

const App = () => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Chargement...</div>
  );

  return (
    <div className="container">
      <h3>En cours de creation</h3>
    </div>
  );
};

export default App;
