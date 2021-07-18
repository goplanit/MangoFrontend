import React from "react";
import styled from "styled-components";

// route
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

// pages
import DetailHeader from "../components/DetailHeader";
import PageDetail from "../pages/PageDetail";
import Main from "../pages/Main";
import TopLists from "../pages/TopLists";

function App() {
  return (
    <ReactContainer>
      <DetailHeader />
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Route path="/restaurants" exact component={PageDetail} />;
          <Route path="/" exact component={Main} />
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
