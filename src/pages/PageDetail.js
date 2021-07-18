import React from "react";
import styled from "styled-components";
import DetailHeader from "../components/DetailHeader";
import ImageCarousel from "../components/ImageCarousel";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <React.Fragment>
          <DetailHeader />
          <ImageCarousel />
        </React.Fragment>
      </Container>
    </React.Fragment>
  );
};

export default PostDetail;
