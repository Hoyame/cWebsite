import React from 'react';
import NavBarComponent from './navbar';
import routesCV from './routes';
import { HashRouter, Route, Switch } from "react-router-dom";

import '../../styles/cv/cv.scss'

const CvPage = () => {
   return (
      <React.Fragment>
         <NavBarComponent />
         <div className="cv-component">
            <Switch>
               {routesCV.map((route, idx) => {
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
         </div>
      </React.Fragment>
   );
}

export default CvPage;