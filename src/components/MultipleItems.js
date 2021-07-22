import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
// import TopItem from "./TopItem";
// import { history } from "../redux/configureStore";


export default class MultipleItems extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      rows: 2,
      slidesPerRow: 3,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 4000,
      pauseOnHover: true,
      draggable: true,
    };

    return (
      <div>
        {/* <h2> Multiple items </h2> */}
        <SlideContainer>
          <Slider {...settings}>
            <SingleSlide>
              <Title>이것은 제목</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>2</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>3</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>4</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>5</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>6</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>7</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>8</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>9</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>10</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>11</Title>
            </SingleSlide>
            <SingleSlide>
              <Title>12</Title>
            </SingleSlide>
          </Slider>
        </SlideContainer>
      </div>
    );
  }
}

const SlideContainer = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

const Title = styled.div`
  margin: 15px;
  height: 236px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/mainimage.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  line-height: 100px;
  color: #ffffff;
  font-size: 1.8rem;
  text-shadow: 6px 6px 16px rgb(0 0 0 / 90%);
  text-align: center;
`;

const SingleSlide = styled.div``;
