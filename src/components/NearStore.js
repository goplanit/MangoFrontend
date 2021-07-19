import React from "react";
import styled from "styled-components";

const NearStore = (props) => {
  return (
    <NearStoreListItem>
      <NearStoreListItemContent>
        <NearStoreListItemPicture></NearStoreListItemPicture>
        <NearStoreListItemOuter>
          <NearStoreListItemNameWrap>
            <NearStoreListItemName>
              {props.reviews.shop_name}
            </NearStoreListItemName>
            <NearStoreListItemRating>{props.rate}</NearStoreListItemRating>
          </NearStoreListItemNameWrap>
          <NearStoreListItemInfoWap>
            <NearStoreListItemInfo>
              <NearStoreListItemInfoLabel>
                음식 종류:
              </NearStoreListItemInfoLabel>
              <NearStoreListItemInfoValue>
                {props.food}
              </NearStoreListItemInfoValue>
            </NearStoreListItemInfo>
            <NearStoreListItemInfo>
              <NearStoreListItemInfoLabel>위치:</NearStoreListItemInfoLabel>
              <NearStoreListItemInfoValue>
                {props.location}
              </NearStoreListItemInfoValue>
            </NearStoreListItemInfo>
            <NearStoreListItemInfo>
              <NearStoreListItemInfoLabel>가격대:</NearStoreListItemInfoLabel>
              <NearStoreListItemInfoValue>
                {props.price}
              </NearStoreListItemInfoValue>
            </NearStoreListItemInfo>
          </NearStoreListItemInfoWap>
        </NearStoreListItemOuter>
      </NearStoreListItemContent>
    </NearStoreListItem>
  );
};

const NearStoreListItem = styled.div`
  float: none;
  padding: 15px 0 15px 0;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 1px;
`;

const NearStoreListItemContent = styled.div`
  direction: row;
  display: flex;
  box-direction: normal;
  box-orient: horizontal;
`;

const NearStoreListItemPicture = styled.img`
  width: 103px;
  height: 103px;
  margin-bottom: 0;
`;
const NearStoreListItemOuter = styled.div`
  box-flex: 1;
  flex: 1;
  min-width: 0;
  margin-left: 8px;
`;
const NearStoreListItemNameWrap = styled.div`
  display: flex;
  align-items: center;
  box-align: center;
`;
const NearStoreListItemName = styled.span`
  font-size: 18px;
  line-height: 1.27;
`;
const NearStoreListItemRating = styled.span`
  margin-left: 5px;
  font-size: 19px;
  line-height: 1;
  color: #ff792a;
`;
const NearStoreListItemInfoWap = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  margin-left: 3px;
`;
const NearStoreListItemInfo = styled.dl`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-size: 11px;
  margin: 6px 0 0 0;
`;
const NearStoreListItemInfoLabel = styled.dt`
  color: #9b9b9b;
`;
const NearStoreListItemInfoValue = styled.dd`
  color: #555555;
  margin-inline-start: 0;
`;

NearStore.defaultProps = {
  address: "서울특별시 용산구 대사관로 20",
  phoneNumber: "02-792-0628",
  location: "이태원/한남동",
  food: "퓨전 한식",
  price: "만원-2만원",
  parking: "주차공간없음",
  openTime: "11:30 - 23:00",
  webSite: "https://www.instagram.com/hyodochicken/",
  menu: "효도 꽈리멸 치킨",
  priceWon: "19,000원",
  rate: "4.1",
  branch: "한남점",
  reviews: {
    reviewId: "12d102d9j1d09cds109",
    shop_name: "바바라스키친",
    nickname: "꼬꼬수진",
    profilePic: "img url",
    text: "맛좋네요",
    rate: "맛있다",
    createdAt: "2021-07-17T20:36:59.414Z",
  },
};

export default NearStore;
