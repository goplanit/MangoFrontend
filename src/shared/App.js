import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../pages/Main";
import TopLists from "../pages/TopLists";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/top_lists" exact component={TopLists} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
