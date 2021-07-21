import React, { useState, useRef } from "react";
import styled from "styled-components";

const ReviewWrite = (props) => {
  const [textLength, setTextLength] = useState("");

  const handleChange = (event) => {
    setTextLength(event.target.value);
    console.log(setTextLength);
  };

  return (
    <Body>
      <Main>
        <HeaderWrap>
          <HeaderLogo>
            <HeaderLogoIcon />
          </HeaderLogo>
        </HeaderWrap>
        <ReviewWritePageWrap>
          <ReviewWritePageTitleWrap>
            <ReviewWritePageMessage>{props.store}</ReviewWritePageMessage>
            <ReviewWritefixedTextWrap>
              <ReviewWritefixedText>
                에 대한 솔직한 리뷰를 써주세요.
              </ReviewWritefixedText>
            </ReviewWritefixedTextWrap>
          </ReviewWritePageTitleWrap>
          <ReviewWriteContentWrap>
            <ReviewWriteContentForm>
              <ReviewWritingEditorWrap>
                <ReviewWritingEditor>
                  <ReviewWritingEditorbox>
                    <ReviewWritingRecommandWrap>
                      <ReviewWritingRecommandPicker>
                        <ReviewWritingRecommandList>
                          <ReviewWritingRecommandItem>
                            <ReviewWritingRecommandBtn>
                              <ReviewWritingRecommandEmojiFirst />
                              <ReviewWritingRecommandTextSelect>
                                맛있다
                              </ReviewWritingRecommandTextSelect>
                            </ReviewWritingRecommandBtn>
                          </ReviewWritingRecommandItem>
                          <ReviewWritingRecommandItem>
                            <ReviewWritingRecommandBtn>
                              <ReviewWritingRecommandEmojiSecond />
                              <ReviewWritingRecommandText>
                                괜찮다
                              </ReviewWritingRecommandText>
                            </ReviewWritingRecommandBtn>
                          </ReviewWritingRecommandItem>
                          <ReviewWritingRecommandItem>
                            <ReviewWritingRecommandBtn>
                              <ReviewWritingRecommandEmojiThird />
                              <ReviewWritingRecommandText>
                                별로
                              </ReviewWritingRecommandText>
                            </ReviewWritingRecommandBtn>
                          </ReviewWritingRecommandItem>
                        </ReviewWritingRecommandList>
                      </ReviewWritingRecommandPicker>
                    </ReviewWritingRecommandWrap>
                    <ReviewEditor
                      onChange={handleChange}
                      value={textLength}
                      maxlength="10000"
                      placeholder="
              주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
                    />
                  </ReviewWritingEditorbox>
                  <ReviewEditorTextLengthWrap>
                    <ReviewEditorLength>{setTextLength}</ReviewEditorLength>
                    <ReviewEditorLength>/</ReviewEditorLength>
                    <ReviewEditorLength>10,000</ReviewEditorLength>
                  </ReviewEditorTextLengthWrap>
                </ReviewWritingEditor>
              </ReviewWritingEditorWrap>
              <ReviewImgContainer>
                <ReviewImgWarp>
                  <ReviewImgCnt>
                    <ReviewImgCntLength>0</ReviewImgCntLength>
                    <ReviewImgCntLength>/</ReviewImgCntLength>
                    <ReviewImgCntLength>30</ReviewImgCntLength>
                  </ReviewImgCnt>
                </ReviewImgWarp>
                <ReviewImgContainerList>
                  <ReviewImgItemList>
                    <ReviewImgAddButton for="input-button">
                      <input
                        type="file"
                        id="input-button"
                        style={{ display: "none" }}
                      />
                      <AddBtn />
                    </ReviewImgAddButton>
                  </ReviewImgItemList>
                </ReviewImgContainerList>
              </ReviewImgContainer>
            </ReviewWriteContentForm>
          </ReviewWriteContentWrap>
          <ButtonWrap>
            <ContinueButton>나중에 이어쓰기</ContinueButton>
            <ReviewButtonWrap>
              <CancelBtn>취소</CancelBtn>
              <SubmitBtn>리뷰 올리기</SubmitBtn>
            </ReviewButtonWrap>
          </ButtonWrap>
        </ReviewWritePageWrap>
      </Main>
    </Body>
  );
};

const Body = styled.body`
  position: relative;
  min-width: 320px;
  margin: 0 auto;
  font-size: 100%;
  line-height: 100%;
  word-break: keep-all;
`;
const Main = styled.main`
  overflow: hidden;
`;
const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  justify-content: flex-start;
  box-pack: start;
  align-items: center;
  box-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 61px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0 4px 11px rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;
const HeaderLogo = styled.a`
  display: flex;
  justify-content: center;
  box-pack: center;
  box-direction: normal;
  box-orient: horizontal;
  margin: 0 25px;
`;
const HeaderLogoIcon = styled.span`
  width: 100px;
  height: 33px;
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/mangoplate-logo-horizontal.svg);
  background-size: cover;
  background-repeat: no-repeat;
`;

const ReviewWritePageWrap = styled.section`
  width: 678px;
  margin: 101px auto 62px;
`;
const ReviewWritePageTitleWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const ReviewWritePageMessage = styled.strong`
  display: block;
  max-width: 400px;
  font-size: 28px;
  line-height: 1.462;
  color: #ff7100;
  word-break: break-word;
`;
const ReviewWritefixedTextWrap = styled.div`
  position: relative;
  margin-left: 4px;
`;
const ReviewWritefixedText = styled.span`
  font-size: 16px;
  width: 270px;
  margin: 0;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  line-height: 1.45;
  color: #7f7f7f;
`;

const ReviewWriteContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
`;
const ReviewWriteContentForm = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  flex: 1;
  box-flex: 1;
  flex: 1;
`;
const ReviewWritingEditorWrap = styled.div`
  width: 678px;
  margin-bottom: 22px;
`;
const ReviewWritingEditor = styled.div`
  box-flex: 1;
  flex: 1;
  position: relative;
`;
const ReviewWritingEditorbox = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 16px;
`;
const ReviewWritingRecommandWrap = styled.div`
  margin-bottom: 20px;
`;
const ReviewWritingRecommandPicker = styled.div`
  position: relative;
`;
const ReviewWritingRecommandList = styled.div`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
`;
const ReviewWritingRecommandItem = styled.div`
  margin-right: 24px;
`;
const ReviewWritingRecommandBtn = styled.span`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  text-align: center;
  color: #cbcbcb;
`;
const ReviewWritingRecommandEmojiFirst = styled.span`
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_active_face.svg);
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  background-size: cover;
`;
const ReviewWritingRecommandEmojiSecond = styled.span`
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_face.svg);
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  background-size: cover;
`;
const ReviewWritingRecommandEmojiThird = styled.span`
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_face.svg);
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  background-size: cover;
`;

const ReviewWritingRecommandText = styled.span`
  display: block;
  font-size: 15px;
  margin-top: 8px;
  font-weight: 600;
`;

const ReviewWritingRecommandTextSelect = styled.span`
  display: block;
  font-size: 15px;
  margin-top: 8px;
  font-weight: 600;
  color: #ff7100;
`;

const ReviewEditor = styled.textarea`
  display: block;
  width: 100%;
  font-size: 16px;
  color: #000000;
  resize: none;
  overflow: hidden;
  overflow-wrap: break-word;
  height: 150px;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;
const ReviewEditorTextLengthWrap = styled.p`
  transform: translateY(100%);
  position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 13px;
  line-height: normal;
  color: #7f7f7f;
`;
const ReviewEditorLength = styled.span`
  border: 0 none;
  margin-right: 3px;
`;

const ReviewImgWarp = styled.div`
  position: relative;
  width: 687px;
  margin-bottom: 41px;
`;
const ReviewImgCnt = styled.div`
  top: 93px;
  left: 89px;
  display: block;
  transform: translateX(-100%);
  transition: 0.3s ease;
  position: absolute;
  width: 89px;
  font-size: 12px;
  text-align: right;
  color: #7f7f7f;
`;
const ReviewImgCntLength = styled.span`
  border: 0 none;
  margin-right: 3px;
`;
const ReviewImgContainer = styled.div`
  position: relative;
`;
const ReviewImgContainerList = styled.div`
  height: 98px;
  display: flex;
  flex-wrap: wrap;
  min-height: 98px;
`;
const ReviewImgItemList = styled.li`
  left: 0px;
  top: 0px;
  transform: translateX(0px) translateY(0px);
  display: block;
  position: absolute;
  margin-right: 9px;
  margin-bottom: 9px;
`;
const ReviewImgAddButton = styled.label`
  opacity: 1;
  transform: scale(1);
  display: flex;
  justify-content: center;
  box-pack: center;
  align-items: center;
  box-align: center;
  width: 89px;
  height: 89px;
  line-height: 89px;
  text-align: center;
  border: 1px dashed #dbdbdb;
  cursor: pointer;
`;
const AddBtn = styled.span`
  width: 27px;
  height: 27px;
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/plus_icon.svg);
  background-size: cover;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  width: 678px;
`;
const ContinueButton = styled.button`
  border-color: #cbcbcb;
  color: #cbcbcb;
  cursor: not-allowed;
  min-width: 140px;
  min-height: 50px;
  margin-right: 34px;
  padding-left: 14px;
  padding-right: 14px;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  background-color: transparent;
  /* background-color: #FFFFFF; */
`;

const ReviewButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  box-pack: end;
  width: 678px;
`;
const CancelBtn = styled.button`
  min-width: 140px;
  min-height: 50px;
  margin-right: 16px;
  padding-left: 14px;
  padding-right: 14px;
  border: 1px solid #7f7f7f;
  border-radius: 50px;
  font-size: 16px;
  color: #7f7f7f;
  text-align: center;
  background-color: transparent;
  /* background-color: #ffffff; */
`;
const SubmitBtn = styled.button`
  border-color: #e9e9e9;
  background-color: #e9e9e9;
  color: #ffffff;
  cursor: not-allowed;
  min-width: 140px;
  min-height: 50px;
  padding-left: 14px;
  padding-right: 14px;
  border: 1px solid;
  border-radius: 50px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export default ReviewWrite;

ReviewWrite.defaultProps = {
  shopId: "2324202",
  nickname: "shane",
  store: "밴건디 스테이크 하우스",
  profilePic: "",
  text: "",
  rate: "",
};
