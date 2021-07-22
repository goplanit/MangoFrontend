import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { config } from "../../shared/config";
// import { getCookie } from "../../shared/Cookie";
import axios from "axios";

//action
const GET_STORE = "GET_STORE";
const GET_ONESTORE = "GET_ONESTORE";
const LOADING = "LOADING";

//action creators
const getStore = createAction(GET_STORE, (store_info) => ({ store_info }));
const getOneStore = createAction(GET_ONESTORE, (store_info) => ({
  store_info,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  info: [],
  one_info: {
    shopName: "",
    keyword: "",
    star: 0,
    shopId: "",
    id: "",
    views: 0,
    reviews: [],
    data: [],
    menuList: [],
    tags: "",
    img_url: [],
    likes: [],
    rates: { highsRate: 1, middleRate: 0, lowsRate: 0 },
  },
  is_loading: false,
};

// middleWare
const getStoreDB = () => {
  const getStoreAPI = "http://13.125.79.33/api/shops/60f81c5697e1952395abef26";

  return function (dispatch, getState) {
    console.log("here");
    dispatch(loading(true));
    axios
      .get(getStoreAPI)
      // .get(`config.api + "/api/shops/" + ${shopId}`, { withCredentials: true })
      .then((res) => {
        let info = {};
        const store = res.data.shopOne;
        console.log(store);
        let detail = {
          shopName: store.shop.shopName,
          keyword: store.shop.keyword,
          star: store.shop.star,
          shopId: store.shop.shopId,
          id: store.shop.id,
          views: store.shop.views,
          reviews: store.shop.reviews,
          data: store.shop.data,
          menuList: store.shop.menuList,
          tags: store.shop.tags,
          img_url: store.shop.img_url,
          likes: store.shop.likes,
          rates: store.shop.rates,
        };
        dispatch(getOneStore(detail));
      })
      .catch((e) => console.error(e));
  };
};

// reducer
export default handleActions(
  {
    [GET_STORE]: (state, action) =>
      produce(state, (draft) => {
        draft.info = action.payload.store_info;
        draft.is_loading = false;
        console.log(draft);
      }),
    [GET_ONESTORE]: (state, action) =>
      produce(state, (draft) => {
        draft.one_info = action.payload.store_info;
        draft.is_loading = false;
        console.log(draft);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.detail;
      }),
  },
  initialState
);

const actionCreators = {
  getStore,
  getStoreDB,
};

export { actionCreators };
