import React from "react";
import styled from "styled-components";
import { Text } from "../elements";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import SimpleModal from "../elements/Modal";

const HeaderMain = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <NaviBar>

        {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
        <Img onClick={()=>{props.history.push("/");}} src="https://mangoplate.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_light-gray_-removebg-preview.png" />
        {/* </Link> */}

        <div style={{ display: "flex", marginRight: "25px" }}>
          <div>
          <Link to="/top_lists" style={{ textDecoration: 'none' }}>
            <Text color="white" size="18px" bold margin="12px 45px" style={{cursor: "pointer" }}>
              맛집 리스트
            </Text>
            </Link>
          </div>
          <SimpleModal/>
          </div>
      </NaviBar>
    </React.Fragment>
  );
};

HeaderMain.defaultProps = {};

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
  top: 0;
  width: 100%;
  text-align: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default withRouter(HeaderMain);
