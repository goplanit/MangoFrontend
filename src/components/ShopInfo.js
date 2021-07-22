import React, { useEffect } from "react";
import styled from "styled-components";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as shopActions } from "../redux/modules/Shop_module";

const ShopInfo = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  const shopData = useSelector((state) => state.shop.data);
  const menuList = useSelector((state) => state.shop.menuList);
  const imgUrl = useSelector((state) => state.shop.img_url);
  console.log(shopData);

  useEffect(() => {
    console.log("하아....");
    dispatch(shopActions.getStoreDB());
  }, []);

  return (
    <Info>
      <InfoBody>
        {shopData.map((val, index) => {
          const i = index;
          return (
            <InfoTr>
              <InfoTh>{shopData[i][0]}</InfoTh>
              <InfoTd>{shopData[i][1]}</InfoTd>
            </InfoTr>
          );
        })}
        <InfoTr>
          <InfoTh>메뉴</InfoTh>
          {menuList.map((val, index) => {
            const i = index;
            return (
              <MenuItem>
                <MenuDetail>{menuList[i][0]}</MenuDetail>
                <MenuDetailRight>{menuList[i][1]}</MenuDetailRight>
              </MenuItem>
            );
          })}
        </InfoTr>
        <InfoTr>
          <InfoTh></InfoTh>
          <MenuPicWrap>
            {imgUrl.map((val, index) => {
              const i = index;
              return (
                <InfoTd>
                  <MenuPic src={imgUrl[i]}></MenuPic>
                </InfoTd>
              );
            })}
          </MenuPicWrap>
        </InfoTr>
      </InfoBody>
    </Info>
  );
};

const Info = styled.table`
  padding: 20px 0;
  position: relative;
`;
const InfoBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
const InfoTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const InfoTh = styled.th`
  width: 110px;
  font-size: 0.9rem;
  color: rgba(79, 79, 79, 0.6);
  line-height: 1.7;
  text-align: left;
  vertical-align: top;
  padding-right: 10px;
  padding-bottom: 5px;
`;
const InfoTd = styled.td`
  font-size: 0.9rem;
  color: #4f4f4f;
  line-height: 1.7;
  text-align: left;
  vertical-align: middle;
  padding-bottom: 5px;
`;
const InfoTdWeb = styled.td`
  font-size: 0.9rem;
  color: #4f4f4f;
  line-height: 1.7;
  text-align: left;
  vertical-align: middle;
  padding-bottom: 5px;
  text-decoration: underline !important;
`;

const InfoAddr = styled.span`
  border-radius: 2px;
  border: solid 1px #e9e9e9;
  padding: 0 4px;
  margin-right: 2px;
  font-size: 12px;
  color: #7f7f7f;
`;
const InfoAddrText = styled.span`
  font-size: 14px;
  color: #7f7f7f;
  line-height: normal;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 4px;
`;
const MenuDetail = styled.span`
  flex: 1;
  display: inline-block;
  margin-right: 30px;
  white-space: normal;
  font-size: 0.9rem;
  color: #4f4f4f;
  line-height: 1.7;
  text-align: left;
  vertical-align: middle;
  padding-bottom: 5px;
`;
const MenuDetailRight = styled.span`
  font-size: 0.9rem;
  color: #4f4f4f;
  line-height: 1.7;
  text-align: left;
  vertical-align: middle;
  padding-bottom: 5px;
  margin-left: auto;
`;
const MenuPicWrap = styled.div`
  overflow: hidden;
  margin-top: 6px;
  padding-top: 0;
`;

const MenuPic = styled.img`
  overflow: hidden;
  margin-top: 6px;
  padding-top: 0;
  margin-right: 8px;
  width: 63px;
  height: 63px;
`;

export default ShopInfo;
