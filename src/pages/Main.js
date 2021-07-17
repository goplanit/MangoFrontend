import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const Main = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      <div>
        <MainImg>
          <Container>
          <Title>
            <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
            <p>망고플레이트</p>
          </Title>
          <Input type="text" placeholder=" 지역, 식당 또는 음식"></Input>
          </Container>
        </MainImg>
        <MainImg></MainImg>
        <MainImg></MainImg>

        <div>search</div>
      </div>
      <div>pageleadtodetail</div>
    </React.Fragment>
  );
};
Main.defaultProps = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 35.2px;
  text-align: center;
`;
const Input = styled.input`
  width: 742px;
  height: 54px;
  border-radius: 50px;
  border: 2px solid #ff7100;
  margin: 0 auto;
  display: flex;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/498683_search-icon-small-search-icon-png-png-download-removebg-preview.png");
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: center;
`;

const MainImg = styled.div`
  display: flex;
  width: 100vw;
  height: 38vh;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/mainimage_bread.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  
`;
export default Main;
