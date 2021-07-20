import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AdbSharp } from "@material-ui/icons";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      rows: 2,
      slidesPerRow: 3,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay : true,		
			// autoplaySpeed : 3000, 
      pauseOnHover : true,
      draggable : true,
      
      
    };
    return (
      <div>
        <Slider {...settings}>
          <Slide>
            <h3>1</h3>
          </Slide>
          <Slide>
            <h3>2</h3>
          </Slide>
          <Slide>
            <h3>3</h3>
          </Slide>
          <Slide>
            <h3>4</h3>
          </Slide>
          <Slide>
            <h3>5</h3>
          </Slide>
          <Slide>
            <h3>6</h3>
          </Slide>
          <Slide>
            <h3>7</h3>
          </Slide>
          <Slide>
            <h3>8</h3>
          </Slide>
          <Slide>
            <h3>9</h3>
          </Slide>
          <Slide>
            <h3>10</h3>
          </Slide>
          <Slide>
            <h3>11</h3>
          </Slide>
          <Slide>
            <h3>12</h3>
          </Slide>
        </Slider>
      </div>
    );
  }
}

const Slide = styled.div`
  max-width: 430px;
  height: 260px;
  margin: 25px;
  float: left;
  text-align: center;
  color: white;
  /* margin-bottom: 25px; */
  cursor: pointer;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/mainimage.jpeg");
 `;

 