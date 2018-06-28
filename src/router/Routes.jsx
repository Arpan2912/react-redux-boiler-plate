import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from '../containers';

const routeObj = [
  {
    exact: true,
    path: "/",
    component: Home,
    key: "Home1"
  },
  {
    exact: true,
    path: "/about",
    component: About,
    key: "About2"
  }
];

const Routes = () => {
  let routesObj = routeObj.map(route => {
    return (
      <Route key={route.key} exact={route.exact} path={route.path} component={route.component} />
    )
  }
  )
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      {routesObj}
    </Switch>
  )
};

export default Routes;
