import React from "react";
import styled from "styled-components";
import { Text } from "../elements";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import SimpleModal from "../elements/Modal";

const HeaderTopList = (props) => {
    return (
        <React.Fragment>
            <Main>
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
            <SimpleModal/>
            <AvatarLoginDark src="https://mangoplate.s3.ap-northeast-2.amazonaws.com/login_avatarimage_dark.png" />
          </div>
        </NaviBar>{" "}
        </Main>
        </React.Fragment>
    )
}
const Main = styled.div`
  display: block;
  margin: 0;
  padding: 0;
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
const AvatarLoginDark = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export default withRouter(HeaderTopList);
