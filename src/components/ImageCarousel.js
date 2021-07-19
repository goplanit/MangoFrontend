import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

import caroucel_01 from "../images/caroucel/caroucel_01.png";
import caroucel_02 from "../images/caroucel/caroucel_02.png";
import caroucel_03 from "../images/caroucel/caroucel_03.png";
import caroucel_04 from "../images/caroucel/caroucel_04.png";
import caroucel_05 from "../images/caroucel/caroucel_05.png";

const itemData = [
  {
    img: caroucel_01,
    title: caroucel_01,
  },
  {
    img: caroucel_02,
    title: caroucel_02,
  },
  {
    img: caroucel_03,
    title: caroucel_03,
  },
  {
    img: caroucel_04,
    title: caroucel_04,
  },
  {
    img: caroucel_05,
    title: caroucel_05,
  },
];

const colorTheme = createTheme({
  palette: {
    main: "#000000",
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    // position: absolute,
    // display: block,
    bottom: 12,
    right: 15,
    width: 186,
    height: 50,
    /* background: rgba(0, 0, 0, 0.44); */
    // borderRadius: 50,
    zIndex: 2,
    opacity: 0.5,
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function ImageCarousel() {
  const classes = useStyles();

  return (
    <Photo_wrap>
      <Outer>
        <Wrapper>
          <Caroucel_img>
            {itemData.map((item) => (
              <Img src={item.img} alt={item.title} />
            ))}
          </Caroucel_img>
          {/* <morePhoto_outer>
            <ThemeProvider theme={colorTheme}>
              <Fab
                variant="extended"
                color="main"
                aria-label="add"
                className={classes.margin}
              >
                <morePhotoText>사진더보기</morePhotoText>
                <ArrowForwardIcon className={classes.extendedIcon} />
              </Fab>
            </ThemeProvider>
          </morePhoto_outer> */}
        </Wrapper>
      </Outer>
    </Photo_wrap>
  );
}

const Photo_wrap = styled.div`
  opacity: 1;
  display: block;
`;

const Outer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  /* position: relative; */
  z-index: 1;
  width: 3650px;
  left: 0px;
  display: block;
  /* transform: translate3d(0px, 0px, 0px);
  transition: all 0ms ease 0s; */
`;

const Caroucel_img = styled.div`
  width: 100%;
  min-width: 300px;
`;

const Img = styled.img`
  width: 370px;
  max-width: 370px;
  max-height: 400px;
  margin: 0 2px;
  z-index: 1;
`;

// const morePhoto_outer = styled.div`
//   position: absolute;
//   display: block;
//   bottom: 12px;
//   right: 15px;
//   width: 186px;
//   height: 50px;
//   /* background: rgba(0, 0, 0, 0.44); */
//   border-radius: 50px;
//   z-index: 2;
// `;

const morePhotoText = styled.p`
  font-size: 1rem;
  line-height: 1.65rem;
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

export default ImageCarousel;
