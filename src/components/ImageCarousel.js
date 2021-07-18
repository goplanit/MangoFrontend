import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
}));

function ImageCarousel() {
  const classes = useStyles();

  return (
    // <Outer>
    <div className={classes.root}>
      {/* <Wrapper> */}
      <ImageList className={classes.imageList} cols={2.5}>
        {/* <Caroucel_img> */}
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
        {/* </Caroucel_img> */}
      </ImageList>
      {/* </Wrapper> */}
      {/* </Outer> */}
    </div>
  );
}

const Outer = styled.div`
  /* overflow: hidden; */
  position: relative;
  width: 100%;
  top: 61px;
  background-color: yellow;
`;

const Wrapper = styled.div`
  width: 100vw;
  left: 0px;
  display: block;
`;

const Caroucel_img = styled.div`
  width: 293px;
  position: relative;
`;

export default ImageCarousel;
