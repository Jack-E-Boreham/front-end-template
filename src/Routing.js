import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const routes = [  {
  path: '/',
  Component: HomePage,
  exact: true,
}, ];

export const Routing = () => {

    return (
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.Component />}
            >
              
            </Route>
          ))}
        </Routes>
      </Router>
    )
}

