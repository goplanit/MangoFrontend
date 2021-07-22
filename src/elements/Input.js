import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    // textRendering,
    // color,
    // letterSpacing,
    // wordSpacing,
    // textTransform,
    // textIndent,
    // textShadow,
    // display,
    // textAlign,
    // appearance,
    // backgroundColor,
    // cursor,
    // margin,
    // font,
    // padding,
    // borderWidth,
    // borderStyle,
    // borderColor,
    // borderImage,
    boxFlex,
    flex,
    border,
    fontSize,
  } = props;

  const styles = {
    boxFlex,
    flex,
    border,
    fontSize,
  };

  return (
    <React.Fragment>
      <Input {...styles}></Input>
    </React.Fragment>
  );
};

// Input.defaultProps = {
//     textRendering: auto,
//     color: -internal-light-dark(black, white),
//     letterSpacing: normal,
//     wordSpacing: normal,
//     textTransform: none,
//     textIndent: 0,
//     textShadow: none,
//     display: inline-block,
//     textAlign: start,
//     appearance: auto,
//     backgroundColor: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59)),
//     cursor: text,
//     margin: 0,
//     font: 400,
//     padding: "2px",
//     borderWidth: "2px",
//     borderStyle: inset,
//     borderColor: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133)),
//     borderImage: initial,
// }

const Input = styled.input`
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  box-flex: ${(props) => props.boxFlex};
  flex: ${(props) => props.flex};
  border: ${(props) => props.border};
  height: 25px;
  width: 100%;
`;

export default Text;
