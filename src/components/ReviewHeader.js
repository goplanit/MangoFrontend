import React from "react";
import styled from "styled-components";

const ReviewHeader = (props) => {
  return (
    <Container>
      <Header>
        <ReviewTitleWrap>
          <ReviewTitle>리뷰</ReviewTitle>
          <ReviewTitleNum>({props.reviews.ReviewTotalCnt})</ReviewTitleNum>
        </ReviewTitleWrap>
        <ReviewFilterListWrap>
          <ReviewFilterListItem>
            <ReviewFilterListItemBtnSelect>
              전체 ({props.reviews.ReviewTotalCnt})
            </ReviewFilterListItemBtnSelect>
          </ReviewFilterListItem>
          <ReviewFilterListItem>
            <ReviewFilterListItemBtn>
              맛있다 ({props.reviews.ReviewTotalLikeCnt})
            </ReviewFilterListItemBtn>
          </ReviewFilterListItem>
          <ReviewFilterListItem>
            <ReviewFilterListItemBtn>
              괜찮다 ({props.reviews.ReviewTotalSosoCnt})
            </ReviewFilterListItemBtn>
          </ReviewFilterListItem>
          <ReviewFilterListItem>
            <ReviewFilterListItemBtnNonAfter>
              별로 ({props.reviews.ReviewTotalBadCnt})
            </ReviewFilterListItemBtnNonAfter>
          </ReviewFilterListItem>
        </ReviewFilterListWrap>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
`;
const Header = styled.header`
  display: flex;
  margin-bottom: 14px;
`;

const ReviewTitleWrap = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  color: #4f4f4f;
  font-weight: 500;
`;
const ReviewTitle = styled.span`
  border: 0 none;
`;
const ReviewTitleNum = styled.span`
  color: #7f7f7f;
`;
const ReviewFilterListWrap = styled.div`
  display: flex;
  margin-left: auto;
`;
const ReviewFilterListItem = styled.li`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  align-items: center;
  align-items: center;
  box-align: center;
`;

const ReviewFilterListItemBtnSelect = styled.button`
  color: #ff792a;
  padding-right: 3px;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  border: 0px;
  border-radius: 0;
  background-color: transparent;
  font-weight: 600;
  ::after {
    content: "|";
    margin: 0 7px;
    color: #9b9b9b;
  }
`;

const ReviewFilterListItemBtn = styled.button`
  padding-right: 3px;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  border: 0px;
  border-radius: 0;
  background-color: transparent;
  color: #9b9b9b;
  font-weight: 600;
  &:after {
    content: "|";
    margin: 0 7px;
    color: #9b9b9b;
  }
`;
const ReviewFilterListItemBtnNonAfter = styled.button`
  padding-right: 3px;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  border: 0px;
  border-radius: 0;
  background-color: transparent;
  color: #9b9b9b;
  font-weight: 600;
`;

export default ReviewHeader;

ReviewHeader.defaultProps = {
  reviews: {
    reviewId: "12d102d9j1d09cds109",
    shop_name: "꼬꼬닭",
    nickname: "꼬꼬수진",
    profilePic: "img url",
    text: "맛좋네요",
    rate: "맛있다",
    createdAt: "2021-07-17T20:36:59.414Z",
    ReviewTotalCnt: "21",
    ReviewTotalLikeCnt: "15",
    ReviewTotalSosoCnt: "4",
    ReviewTotalBadCnt: "2",
    ReviewWriteCnt: "1030",
    ReviewFriendCnt: "162",
  },
};
