import React from "react";
import styled from "styled-components";

//Redux
import { useSelector } from "react-redux";
import { actionCreators as shopActions } from "../redux/modules/Review_module";

const Review = (props) => {
  const reviewData = useSelector((state) => state.review.reviews);
  const createAt = reviewData.createdAt;
  const updateDate = createAt.split("T", 1);

  return (
    <Container>
      <ReviewItem>
        <ReviewList>
          <ReviewLink>
            <ReviewUser>
              <UserPictureWrap>
                <UserPictureimg />
              </UserPictureWrap>
              <UserPictureName>{reviewData.nickname}</UserPictureName>
              <UserstateWrap>
                <UserstateReviewCnt>
                  <EmijiWrite />
                  {reviewData.ReviewWriteCnt}
                </UserstateReviewCnt>
                <UserstateReviewCnt>
                  <EmijiFriend />
                  {reviewData.ReviewFriendCnt}
                </UserstateReviewCnt>
              </UserstateWrap>
            </ReviewUser>
            <ReviewContents>
              <ReviewContentWrap>
                <ReviewContentText>{reviewData.text}</ReviewContentText>
                <ReviewDate>{updateDate[0]}</ReviewDate>
              </ReviewContentWrap>
            </ReviewContents>
            <ReviewEmojiWrap>
              <ReviewEmoji />
              <ReviewEmojiText>맛있다</ReviewEmojiText>
            </ReviewEmojiWrap>
          </ReviewLink>
        </ReviewList>
      </ReviewItem>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
`;

const ReviewList = styled.div`
  display: flex;
  direction: column;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
`;
const ReviewItem = styled.li`
  position: relative;
  border-bottom: 1px solid #dbdbdb;
  list-style: none;
`;
const ReviewLink = styled.a`
  text-decoration: none;
  display: flex;
  direction: row;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  padding: 20px 0 52px 0;
`;
const ReviewUser = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  flex-basis: 70px;
  margin: 15px 35px 0 8px;
`;
const UserPictureWrap = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #dbdbdb;
`;
const UserPictureimg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: none;
  vertical-align: top;
`;
const UserPictureName = styled.span`
  margin-bottom: 2px;
  font-size: 13px;
  line-height: 1.3;
  text-align: center;
  word-break: break-all;
  color: #555555;
`;
const UserstateWrap = styled.div`
  display: flex;
  justify-content: center;
  box-pack: center;
`;
const EmijiWrite = styled.span`
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
  background-position: -996px -600px;
  width: 9px;
  height: 8px;
`;
const EmijiFriend = styled.span`
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
  background-position: -998px -729px;
  width: 8px;
  height: 8px;
`;

const UserstateReviewCnt = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  box-align: center;
  margin-right: 2px;
  font-size: 12px;
  color: #cbcbcb;
`;

const ReviewContents = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  width: 605px;
`;
const ReviewContentWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  box-direction: reverse;
  box-orient: vertical;
`;
const ReviewContentText = styled.p`
  box-ordinal-group: 3;
  order: 2;
  font-size: 15px;
  line-height: 1.666;
  word-break: break-all;
  color: #000000;
`;
const ReviewDate = styled.span`
  box-ordinal-group: 4;
  order: 3;
  font-size: 14px;
  line-height: 1.2;
  color: #9b9b9b;
`;

const ReviewEmojiWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  align-items: center;
  align-items: center;
  box-align: center;
  margin-left: auto;
`;
const ReviewEmoji = styled.span`
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
  background-position: -714px -866px;
  width: 44px;
  height: 44px;
  margin: 0 8px 10px;
`;
const ReviewEmojiText = styled.span`
  font-size: 15px;
  color: #ff792a;
  font-weight: 600;
`;

/* Review.defaultProps = {
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
}; */

export default Review;
