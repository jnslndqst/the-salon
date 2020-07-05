import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Salons, Salon } from "./pages";

const AppContainer = styled.div`
  margin: 0;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Salons />
          </Route>
          <Route path="/salon/:id">
            <Salon />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
