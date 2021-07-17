import React from "react";
import styled from "styled-components";

// route
import { BrowserRouter, Route } from "react-router-dom";

// pages
import DetailHeader from '../components/DetailHeader';
import PageDetail from "../pages/PageDetail";

function App() {
  return (
    <ReactContainer>
      <DetailHeader />
      <BrowserRouter>
        <Route path="/" exact component={PageDetail} />;
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
