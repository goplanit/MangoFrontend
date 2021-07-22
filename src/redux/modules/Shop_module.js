import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/config";
// import { getCookie } from "../../shared/Cookie";
import axios from "axios";

//action
const GET_STORE = "GET_STORE";
const LOADING = "LOADING";

//action creators
const getStore = createAction(GET_STORE, (store_info) => ({ store_info }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  is_loading: false,
};

const initialPost = {
  shopName: "중앙찜닭",
  keyword: "759_jjimdak",
  star: 3.7,
  shopId: "60f6d2ed905aa213046cff17",
  branch: "광주 동구점",
  parking: "주차공간 없음",
  /* website: "https://www.mangoplate.com/restaurants/TKb98SN3qdOr", */
  update_Date: "2020.02.04",
  views: 0, //number
  reviews: 0,
  likes: 0,
  data: [
    //Array
    ["주소", "광주광역시 동구 동명로25번길 4-1"],
    ["지번", " 광주시 동구 동명동 200-107"],
    ["전화번호", "070-8563-2569"],
    ["음식 종류", "카페 / 디저트"],
    ["가격대", "만원 미만"],
  ],
  menuList: [
    ["데일리 생선구이", "28,000원"],
    ["채끝스테이크", "36,000원"],
  ],
  tags: ["광주", "술집"],
  img_url: [
    "https://mblogthumb-phinf.pstatic.net/MjAxODA1MDhfMTUx/MDAxNTI1Nzc3OTAyMzM0.xG1VBG_9B-gM4Pylotglc4co8_4uwqcirvjsl4lNbt0g.J3dSImgZuQOcVzVh7SF0io645hNMnMDmGivzNcvr-MYg.JPEG.kasskara/%EB%91%90%EC%86%90%EC%83%9D%EC%84%A0%EA%B5%AC%EC%9D%B41.JPG?type=w2",
    "https://t1.daumcdn.net/cfile/blog/99528B3C5C67922F25",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFj5mLBYiEnsIvXXkgqHq8I59yQE0KJKDXnz_vstrbDUbQbxm9VB56PtcrfLTgQb3g8q4&usqp=CAU",
    "https://www.gynet.co.kr/news/photo/202012/45398_39639_3543.gif",
  ],
};

// middleWare
const getStoreDB = (shopId = null) => {
  return function (dispatch, getState) {
    dispatch(loading(true));

    axios
      .get(`config.api + "/api/shops/" + ${shopId}`, { withCredentials: true })
      .then((res) => {
        const storeData = res.data.result[0];
        console.log(storeData);
        dispatch(getStore[storeData]);
      });
  };
};

// reducer
export default handleActions(
  {
    [GET_STORE]: (state, action) =>
      produce(state, (draft) => {
        draft.store_info = action.payload.detail;
        draft.is_loading = false;
        console.log(draft.store_info);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  getStore,
  getStoreDB,
};

export { actionCreators };
