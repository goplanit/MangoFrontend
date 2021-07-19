import React from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";

const StoreDetail = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <Outer>
        <Storebox>
          <StoreHead>
            <StoreTitle>
              <Title>
                <StoreName>{props.reviews.shop_name} </StoreName>
                <RateOuter>
                  <RateNumber>{props.rate}</RateNumber>
                </RateOuter>
                <Branch>{props.branch}</Branch>
              </Title>
              <StoreActionButtonWrap>
                <ReviewWriteButton>
                  <ReviewWriteButtonIcon>
                    <CreateIcon fontSize="large" />
                  </ReviewWriteButtonIcon>
                  <ReviewWriteButtonText>리뷰쓰기</ReviewWriteButtonText>
                </ReviewWriteButton>
                <WannaGo>
                  <WannaGoBtn>
                    <StarOutlineIcon fontSize="large" />
                  </WannaGoBtn>
                  <WannaGoTxt>가고싶다</WannaGoTxt>
                </WannaGo>
              </StoreActionButtonWrap>
            </StoreTitle>
            <StatusWrap>
              <CntWrap>
                <VisibilityIcon fontSize="small" />
                <Cnt>8,842</Cnt>
              </CntWrap>
              <CntWrap>
                <CreateIcon fontSize="small" />
                <Cnt>21</Cnt>
              </CntWrap>
              <CntWrap>
                <StarOutlineIcon fontSize="small" />
                <Cnt>336</Cnt>
              </CntWrap>
            </StatusWrap>
          </StoreHead>
          <Info>
            <InfoBody>
              <InfoBody>
                <InfoTr>
                  <InfoTh>주소</InfoTh>
                  <InfoTd>
                    {props.address}
                    <br />
                    <InfoAddr>지번</InfoAddr>
                    <InfoAddrText>{props.oldAddress}</InfoAddrText>
                  </InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh>전화번호</InfoTh>
                  <InfoTd>{props.phoneNumber}</InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh>음식종류</InfoTh>
                  <InfoTd>{props.food}</InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh>가격대</InfoTh>
                  <InfoTd>{props.price}</InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh>주차</InfoTh>
                  <InfoTd>{props.parking}</InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh>영업시간</InfoTh>
                  <InfoTd>{props.openTime}</InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh>웹사이트</InfoTh>
                  <InfoTd>{props.webSite}</InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh>메뉴</InfoTh>
                  <InfoTd>
                    <MenuItem>
                      <MenuDetail>{props.menu}</MenuDetail>
                      <MenuDetail>{props.priceWon}</MenuDetail>
                    </MenuItem>
                    <MenuItem>
                      <MenuDetail>{props.menu}</MenuDetail>
                      <MenuDetail>{props.priceWon}</MenuDetail>
                    </MenuItem>
                    <MenuItem>
                      <MenuDetail>{props.menu}</MenuDetail>
                      <MenuDetail>{props.priceWon}</MenuDetail>
                    </MenuItem>
                    <MenuItem>
                      <MenuDetail>{props.menu}</MenuDetail>
                      <MenuDetail>{props.priceWon}</MenuDetail>
                    </MenuItem>
                    <MenuItem>
                      <MenuDetail>{props.menu}</MenuDetail>
                      <MenuDetail>{props.priceWon}</MenuDetail>
                    </MenuItem>
                  </InfoTd>
                </InfoTr>
                <InfoTr>
                  <InfoTh></InfoTh>
                  <InfoTd>
                    <MenuPic />
                  </InfoTd>
                </InfoTr>
              </InfoBody>
            </InfoBody>
          </Info>
          <UpdateDate>업데이트: {props.reviews.createdAt}</UpdateDate>
        </Storebox>
      </Outer>
    </React.Fragment>
  );
};

const Outer = styled.div`
  margin-top: 40px;
  padding: 0;
`;

const Storebox = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const StoreHead = styled.div`
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  padding-bottom: 10px;
  min-height: 74px;
  margin: 0;
`;

const StoreTitle = styled.div`
  display: flex;
  flex-direction: row;
  direction: normal;
  box-orient: horizontal;
`;

const Title = styled.span`
  padding-right: 50px;
  max-width: 75%;
  font-size: 1rem;
  line-height: 35px;
`;

const StoreName = styled.h1`
  display: inline-block;
  max-width: 100%;
  word-break: break-all;
  border: 0 none;
  margin-bottom: 0;
`;

const RateOuter = styled.strong`
  font-weight: 500;
`;

const RateNumber = styled.span`
  color: #ff792a;
  margin-left: 8px;
  font-size: 2rem;
`;

const Branch = styled.p`
  font-size: 1.1rem;
  color: #888;
  line-height: 1.2rem;
  margin-top: 0;
  font-weight: 700;
`;

const StoreActionButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  margin-left: auto;
  margin-top: 14px;
`;
const ReviewWriteButton = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  align-items: center;
  box-align: center;
  margin: 0 19px 0 0;
  border: none;
  height: 100%;
`;

const ReviewWriteButtonIcon = styled.i`
  display: block;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ReviewWriteButtonText = styled.span`
  margin-top: 12px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: #9b9b9b;
`;

const WannaGo = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  align-items: center;
  box-align: center;
  border: none;
  height: 100%;
`;

const WannaGoBtn = styled.div`
  display: block;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const WannaGoTxt = styled.span`
  margin-top: 12px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: #9b9b9b;
`;

const StatusWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  font-size: 0.7rem;
  margin-left: 2px;
  color: #9b9b9b;
`;
const CntWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cnt = styled.span`
  margin-right: 15px;
  font-size: 15px;
`;

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
`;
const MenuPic = styled.img`
  overflow: hidden;
  margin-top: 6px;
  padding-top: 0;
  width: 103px;
  height: 103px;
`;

const UpdateDate = styled.p`
  padding: 4px 0 20px 0;
  font-size: 12px;
  text-align: right;
  color: rgba(79, 79, 79, 0.6);
`;

StoreDetail.defaultProps = {
  address: "서울특별시 용산구 대사관로 20",
  oldAddress: "서울시 용산구 한남동 686-63",
  phoneNumber: "02-792-0628",
  food: "닭/오리 요리",
  price: "만원-2만원",
  parking: "주차공간없음",
  openTime: "11:30 - 23:00",
  webSite: "https://www.instagram.com/hyodochicken/",
  menu: "효도 꽈리멸 치킨",
  priceWon: "19,000원",
  rate: "4.5",
  branch: "한남점",
  reviews: {
    reviewId: "12d102d9j1d09cds109",
    shop_name: "효도치킨",
    nickname: "꼬꼬수진",
    profilePic: "img url",
    text: "맛좋네요",
    rate: "맛있다",
    createdAt: "2021-07-17T20:36:59.414Z",
  },
};

export default StoreDetail;
