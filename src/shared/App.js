import React from "react";
import styled from "styled-components";

// route
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

// pages
import PageDetail from "../pages/PageDetail";
import Main from "../pages/Main";
import TopLists from "../pages/TopLists";
import { Grid } from "../elements/Index";
import ReviewWrite from '../pages/ReviewWrite';

function App() {
  return (
    <ReactContainer>
      <BrowserRouter>
        <Route path="/restaurants" exact component={PageDetail} />
      </BrowserRouter>

      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/reviews/:shop_name" exact component={ReviewWrite} />
          <Route path="/top_lists" exact component={TopLists} />
        </ConnectedRouter>
      </BrowserRouter>
    </ReactContainer>
  );
}

const ReactContainer = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export default App;
