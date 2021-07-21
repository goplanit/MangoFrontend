import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

//action
const GET_REVIEW = "GET_REVIEW";

//action creators
const getReview = createAction(GET_REVIEW, (review) => ({ review }));

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
        draft.review = action.payload.review;
      }),
  },
  initialState
);

const actionCreators = {
  getReview,
};

export { actionCreators };
