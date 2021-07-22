import React from "react";
import styled from "styled-components";

const ReviewImage = (props) => {
  const { src, size, backgroundImage } = props;

  const styles = {
    src,
    size,
    backgroundImage,
  };

  return (
    <React.Fragment>
      <UserImg {...styles}></UserImg>
    </React.Fragment>
  );
};

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: none;
  vertical-align: top;
  background-image: ${(props) => props.backgroundImage};
`;

export default ReviewImage;
