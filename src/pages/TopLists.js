import React from "react";
import styled from "styled-components";
import { Text } from "../elements";
import { Link } from "react-router-dom";
import SimpleModal from "../elements/Modal";
import Footer from "../components/Footer";

const TopLists = (props) => {
  return (
    <React.Fragment>
      <NaviBar>
        <Img
          onClick={() => {
            props.history.push("/");
          }}
          src="https://mangoplate.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_orange_-removebg-preview.png"
        />
        {/* <Input type="text" placeholder=" 지역, 식당 또는 음식"></Input>     */}
        <div style={{ display: "flex", marginRight: "25px" }}>
          <div>
            <Link to="/top_lists" style={{ textDecoration: "none" }}>
              <Text
                color="#888888"
                size="18px"
                bold
                margin="12px 45px"
                style={{ cursor: "pointer" }}
              >
                맛집 리스트
              </Text>
            </Link>
          </div>
          <SimpleModal />
          <AvatarLoginDark src="https://mangoplate.s3.ap-northeast-2.amazonaws.com/login_avatarimage_dark.png" />
          {/* <Image shape="circle" src={props.src} /> */}
        </div>
      </NaviBar>{" "}
      {/* <Outer> */}
      <Wrapper>
        <MatjipList>믿고 보는 맛집 리스트</MatjipList>
        <br />
        <TagItemSet>
          <TagItemTwo>#전체</TagItemTwo>
          <TagItemThree>#파스타</TagItemThree>
          <TagItemFour>#무한리필</TagItemFour>
          <TagItemThree>#이태원</TagItemThree>
          <TagItemTwo>#고기</TagItemTwo>
          <TagItemThree>#데이트</TagItemThree>
          <TagItemTwo>#강남</TagItemTwo>
          <TagItemTwo>#홍대</TagItemTwo>
          <TagItemFour>#스테이크</TagItemFour>
          <TagItemFour>#가로수길</TagItemFour>
          <TagItemThree>#디저트</TagItemThree>
        </TagItemSet>
        <InfoCardSet>
          <InfoCard></InfoCard>
          <InfoCard></InfoCard>
          <InfoCard></InfoCard>
          <InfoCard></InfoCard>
          <InfoCard></InfoCard>
          <InfoCard></InfoCard>
          <InfoCard></InfoCard>
          <InfoCard></InfoCard>
        </InfoCardSet>
      </Wrapper>
      {/* </Outer> */}
      <Footer />
    </React.Fragment>
  );
};
// const Outer = styled.div`
// `;

const InfoCardSet = styled.div`
  max-width: 1300px;
  padding: 32px 0px 0px 0px;
`;

const InfoCard = styled.img`
  width: 585px;
  height: 267.7px;
  /* padding: 23px 25px 0px; */
  margin-top: 12px;
  margin-bottom: 12px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/mainimage.jpeg");
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding: 38px 0px 36px 0px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 85vw;
  text-align: center;
  /* justify-content: center;
  display: flex; */
  position: relative;
`;

const TagItemSet = styled.div`
  display: flex;
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
  margin-left: 90px;
`;

const TagItemFour = styled.button`
  margin: 10px 3px 0 3px;
  width: 108.91px;
  height: 40px;
  padding: 0 13px;
  line-height: 32px;
  color: #6a6a6a;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.1em;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
`;

const TagItemThree = styled.button`
  margin: 10px 3px 0 3px;
  width: 95.11px;
  height: 40px;
  padding: 0 13px;
  line-height: 32px;
  color: #6a6a6a;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.1em;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
`;

const TagItemTwo = styled.button`
  margin: 10px 3px 0 3px;
  width: 81.31px;
  height: 40px;
  padding: 0 13px;
  line-height: 32px;
  color: #6a6a6a;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.1em;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
`;

const MatjipList = styled.h1`
  display: block;
  /* padding-right: 15px;
  padding-left: 15px; */
  color: #ff792a;
  line-height: 1.35em;
  text-align: left;
  font-size: 1.438rem;
  font-weight: normal;
  margin-left: 90px;
`;
const AvatarLoginDark = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;

`;
const Img = styled.img`
  margin-left: 10px;
  width: 120px;
  height: 58px;
  cursor: pointer;
`;
const NaviBar = styled.div`
  height: 50px;
  padding: 1vh;
  background: null;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  text-align: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Input = styled.input`
  font-size: 20px;
  width: 715px;
  height: 54px;
  margin: 0 auto;
  display: flex;
  border: none;
  text-align: left;
  padding-left: 90px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/498683_search-icon-small-search-icon-png-png-download-removebg-preview.png");
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: 5%;
  position: absolute;
  ::placeholder {
    color: lightgrey;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default TopLists;
