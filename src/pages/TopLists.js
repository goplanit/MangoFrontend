import React from "react";
import styled from "styled-components";
import HeaderTopList from "../components/HeaderTopList";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as topActions } from "../redux/modules/toplists";
import TopItem from "../components/TopItem";
import { history } from "../redux/configureStore";

// 탑리스트 페이지
const TopLists = (props) => {
  const top_list = useSelector((state) => state.toplists.top_list);
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.toplists.is_loading);
  React.useEffect(() => {
    dispatch(topActions.getTopDB());
  }, []);

  return (
    <React.Fragment>
      <Main>
        <HeaderTopList/>
        <Article>
          <Section>
            <Wrapper>
              <MatjipList>믿고 보는 맛집 리스트</MatjipList>
              <TagContainer>
                <TagItemSet>
                  <TagItemTwo>#전체</TagItemTwo>
                  <TagItemThree>#파스타</TagItemThree>
                  <TagItemFour>#무한리필</TagItemFour>
                  <TagItemThree>#이태원</TagItemThree>
                  <TagItemTwo>#고기</TagItemTwo>
                  <TagItemThree>#데이트</TagItemThree>
                  <TagItemTwo>#강남</TagItemTwo>
                  <TagItemTwo>#홍대</TagItemTwo>
                  <TagItemFour>#스테이크</TagItemFour>
                  <TagItemFour>#가로수길</TagItemFour>
                  <TagItemThree>#디저트</TagItemThree>
                </TagItemSet>
              </TagContainer>
              
              <TopItemSet className="top">
              {top_list.map((l) => {
                console.log(top_list);
                return (
                  <TopListItem className="TopListItem" 
                    key={l.id}
                    onClick={() => {
                      history.push(`/top_lists`);
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    >
                    <TopItem key={l.id} {...l} /> 
                  </TopListItem>
                );
              })}
              </TopItemSet>

              {/* <TopItemSet>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
              </TopItemSet> */}
            </Wrapper>
          </Section>
        </Article>
        <Footer />
      </Main>
    </React.Fragment>
  );
};

const TagItemSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;
const TopListItem = styled.div`
  position: relative;
  max-width: 585px;
  height: 237px;
  flex: 1 0 40%;
  margin: 15px;
  overflow: hidden;
`;

const Main = styled.div`
  display: block;
  margin: 0;
  padding: 0;
`;

const TagContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: 40px;
  margin-bottom: 20px;
  padding: 0;
  border: 0 none;
  display: block;
`;

const MatjipList = styled.h1`
  padding-right: 0;
  padding-left: 0;
  font-size: 1.438rem;
  color: #ff792a;
  line-height: 1.2em;
  text-align: left;
  display: block;
  font-weight: normal;
  border: 0 none;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 40px;
  /* display: block;
  color: #ff792a;
  line-height: 1.35em;
  text-align: left;
  font-size: 1.438rem;
  */
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  border: 0 none;
  display: block;
  /* padding: 38px 0px 36px 0px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 85vw;
  text-align: center;
  position: relative; */
`;

const Section = styled.div`
  background-color: #f7f7f7;
  padding: 38px 0 36px 0;
  position: relative;
  display: block;
`;

const Article = styled.div`
  padding-top: 61px;
  display: block;
`;

const TopItemSet = styled.div`
  /* max-width: 1300px;
  padding: 32px 0px 0px 0px; */
  /* overflow: hidden;
  list-style: none;
  border: 0 none;
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px; */
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

{/* const InfoCard = styled.img`
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/mainimage.jpeg");
  cursor: pointer;
  padding-right: 15px;
  display: inline-block;
  width: 50%;
  margin: -4px;
  box-sizing: border-box;
  padding-top: 32px;
  list-style: none;
  border: 0 none;

  width: 585px;
  height: 267.7px;
  margin-top: 12px;
  margin-bottom: 12px;
`; */}

const TagItemFour = styled.button`
  width: 108.91px;
  /* margin: 10px 3px 0 3px;
  height: 40px;
  padding: 0 13px;
  line-height: 32px;
  font-size: 14px;
  font-weight: bold;
   */
  color: #6a6a6a;
  display: inline-block;
  margin: 15px 3px 0 3px;
  padding: 0 20px;
  font-size: 0.938rem;
  line-height: 38px;
  letter-spacing: 0em;
  border-radius: 50px;
  border: 1px solid #cbcbcb;
  background-color: #fff;
  cursor: pointer;
`;

const TagItemThree = styled.button`
  width: 95.11px;
  /* margin: 10px 3px 0 3px;
  height: 40px;
  padding: 0 13px;
  line-height: 32px;
  font-size: 14px;
  font-weight: bold;
   */
  color: #6a6a6a;
  display: inline-block;
  margin: 15px 3px 0 3px;
  padding: 0 20px;
  font-size: 0.938rem;
  line-height: 38px;
  letter-spacing: 0em;
  border-radius: 50px;
  border: 1px solid #cbcbcb;
  background-color: #fff;
  cursor: pointer;
`;

const TagItemTwo = styled.button`
  width: 81.31px;
  /* margin: 10px 3px 0 3px;
  height: 40px;
  padding: 0 13px;
  line-height: 32px;
  font-size: 14px;
  font-weight: bold;
   */
  color: #6a6a6a;
  display: inline-block;
  margin: 15px 3px 0 3px;
  padding: 0 20px;
  font-size: 0.938rem;
  line-height: 38px;
  letter-spacing: 0em;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid #cbcbcb;
  cursor: pointer;
`;

{/* const Input = styled.input`
  font-size: 20px;
  width: 715px;
  height: 54px;
  margin: 0 auto;
  display: flex;
  border: none;
  text-align: left;
  padding-left: 90px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/498683_search-icon-small-search-icon-png-png-download-removebg-preview.png");
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: 5%;
  position: absolute;
  ::placeholder {
    color: lightgrey;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }
`; */}

export default TopLists;