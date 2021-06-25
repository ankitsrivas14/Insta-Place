import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavgation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavgation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Router path="/places/new" exact>
            <NewPlace />
          </Router>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
