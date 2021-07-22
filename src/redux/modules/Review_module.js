import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

//action
const GET_REVIEW = "GET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const REMOVE_REVIEW = "REMOVE_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";

//action creators
const getReviews = createAction(GET_REVIEW, (reviews) => ({ reviews }));
const addReview = createAction(ADD_REVIEW, (review) => ({ review }));
const removeReview = createAction(REMOVE_REVIEW, (reviewId) => ({
  reviewId,
}));
const editReview = createAction(EDIT_REVIEW, (reviewId, review) => ({
  reviewId,
  review,
}));

// 식당 아이디에 해당하는 댓글 조회  "GET"
// 리뷰 작성  "POST"  /api/reviews/:shopId
// 리뷰 수정  "PUT"  api/reviews/:reviewId
// 리뷰 삭제  "DELETE"   api/reviews/:shopId/:reviewId

const initialState = {
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

// reducer
export default handleActions(
  {
    [GET_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.reviews = action.payload.reviews;
      }),
  },
  initialState
);

const actionCreators = {
  getReviews,
};

export { actionCreators };
