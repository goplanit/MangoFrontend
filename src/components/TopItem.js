import React from "react";
import styled from "styled-components";

const TopItem = (props) => {
    console.log(props);
  return (
    <TopListItem>
      <ListItem>
        <Thumb>
          <Inner>
            <Image src={props.img_url}/>
          </Inner>
        </Thumb>

        <Info>
          <InfoInnerWrap>
            <Title >{props.title}</Title>
            <Desc>{props.desc}</Desc>
            <Hash />
          </InfoInnerWrap>
        </Info>
      </ListItem>
    </TopListItem>
  );
};

const TopListItem = styled.li`
  padding-right: 15px;
  display: inline-block;
  width: 50%;
  margin: -4px;
  box-sizing: border-box;
  padding-top: 32px;
  list-style: none;
  border: 0 none;
  padding: 0;
`;
const ListItem = styled.figure`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  cursor: pointer;
`;
const Thumb = styled.div`
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  border: 0 none;
  margin: 0;
  padding: 0;
  display: block;
`;
const Inner = styled.div`
  /* position: relative; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 0 none;
  margin: 0;
  padding: 0;
  display: block;
`;
const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */

  color: rgba(255, 255, 255, 0);
  text-indent: -9999px;
  border: none;
  vertical-align: top;
  margin: 0;
  padding: 0;
`;

const Info = styled.figcaption`
  padding-top: 23px;
  padding-right: 25px;
  padding-left: 25px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  margin: 0;
  padding: 0;
`;
const InfoInnerWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%; 
  border: 0 none;
  display: block;
  margin: 0;
  padding: 0;
`;
const Title = styled.span`
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  display: block;
  color: #ffffff;
  line-height: 1.2em;
  word-break: break-all;
  border: 0 none;
  margin: 0;
  padding: 0;
`;
const Desc = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
  text-align: center;
  color: #ffffff;
  line-height: 1.2em;
  border: 0 none;
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Hash = styled.p`
  right: 25px;
  bottom: 38px;
  left: 25px;
  font-size: 1.1rem;
  line-height: 1.3em;
  display: none;
  overflow: hidden;
  position: absolute;
  color: rgba(255, 255, 255, 0.7);
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 0 none;
  margin: 0;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export default TopItem;