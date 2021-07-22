import React from "react";
import styled from "styled-components";
import { Grid } from "../elements/index";

//Component
import DetailHeader from "../components/DetailHeader";
import ImageCarousel from "../components/ImageCarousel";
import StoreDetail from "../components/StoreDetail";
import DetailSide from "../components/DetailSide";
import Footer from "../components/Footer";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <DetailHeader />
        <ImageCarousel />
      </Grid>

      <Grid>
        <ColumnWrapper>
          <ColumnContents>
            <StoreDetail />
          </ColumnContents>
          <SideWrap>
            <DetailSide />
          </SideWrap>
        </ColumnWrapper>
        <Footer />
      </Grid>
    </React.Fragment>
  );
};

const ColumnWrapper = styled.div`
  position: relative;
  display: flex;
  border-top: 6px solid #fff;
  width: 100%;
  height: 100%;
`;

const ColumnContents = styled.div`
  width: calc(100% - 400px);
  height: 100%;
  /* background-color: #fff; */
  flex: 1;
  float: left;
  padding: 0 20px;
`;

const SideWrap = styled.div`
  position: relative;
  float: right;
  width: 400px;
  background-color: #f6f6f6;
`;

export default PostDetail;
