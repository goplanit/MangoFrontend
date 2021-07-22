import { Copyright, Language } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Outer>
        <Inner>
          <div>
            <MpLogo>
              <Link
                // onClick={() => {
                //   props.history.push("/");
                // }}
              >
                <MpImage
                  src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/mangoplate-gray-logo.svg"
                  alt=""
                />
              </Link>
              <SmallTitle>
                <p>____</p>
                <p>Eat, Share, Be Happy.</p>
              </SmallTitle>
            </MpLogo>
            <SnsImage>
              <a href="https://www.facebook.com/MangoPlate/">
                <FacebookBtn />
              </a>
              <a href="https://www.instagram.com/mangoplate/">
                <InstagramBtn />
              </a>
            </SnsImage>

            <LinkExternal>
              <ListLinks>
                <ListLink>회사소개</ListLink>
                <ListLink>망고플레이트 채용</ListLink>
                <ListLink>투자 정보</ListLink>
                <ListLink>브랜드 가이드라인</ListLink>
                <ListLink>망고플레이트 비즈니스</ListLink>
                <ListLink>광고 문의</ListLink>
              </ListLinks>

              <ListLinks>
                <ListLink>공지사항</ListLink>
                <ListLink>이용약관</ListLink>
                <ListLink>비회원 이용자 이용정책</ListLink>
                <ListLink>개인정보처리방침</ListLink>
                <ListLink>위치기반서비스 이용약관</ListLink>
                <ListLink>커뮤니티 가이드라인</ListLink>
                <ListLink>청소년보호정책</ListLink>
                <ListLink>홀릭 소개</ListLink>
                <ListLink>문의하기</ListLink>
              </ListLinks>
            </LinkExternal>
          </div>

          <KeywordWrap>
            <span>인기지역 : </span>
            <text>
              이태원 | 홍대 | 강남역 | 가로수길 | 신촌 | 명동 | 대학로 | 연남동
              | 부산 | 합정 | 대구 | 여의도 | 건대 | 광화문 | 일산 | 제주 |
              경리단길 | 한남동 | 삼청동 | 대전 | 종로 | 서촌 | 잠실 | 사당역 |
              인천
            </text>
            <br />
            <text>
              | 코엑스 | 상수 | 서래마을 | 송도 | 왕십리 | 분당 | 혜화 |
              고속터미널
            </text>
          </KeywordWrap>

          <LanguageCopyright>
            <CompanyCopyrights>
              <p>
                (주)여기어때컴퍼니
                <br />
                서울특별시 강남구 봉은사로 479, 479타워 11층
                <br />
                대표이사: 정명훈
                <br />
                사업자 등록번호: 742-86-00224
                <a
                  href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7428600224"
                  style={{ color: "#9b9b9b", textDecoration: "none" }}
                >
                  {" "}
                  [사업자정보확인]
                </a>
                <br />
                통신판매업 신고번호: 2017-서울강남-01779
                <br />
                고객센터: 02-565-5988
                <br />
                <br />
                <span>© 2021 MangoPlate Co., Ltd. All rights reserved.</span>
              </p>
            </CompanyCopyrights>
            <SelectLanguage>
              <text>한국어</text>
              <text> | English</text>
              <text> | 简体中文</text>
            </SelectLanguage>
          </LanguageCopyright>
        </Inner>
      </Outer>
    </React.Fragment>
  );
};

Footer.defaultProps = {};
const ListLink = styled.div`
  display: block;
  width: 307px;
  font-size: 1rem;
  line-height: 35px;
  border: none;
`;

const ListLinks = styled.div`
  float: left;
  border: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const LinkExternal = styled.div`
  display: inline-block;
  width: 714px;
  margin-bottom: 10px;
  overflow: hidden;
  color: #9b9b9b;
`;
const InstagramBtn = styled.img`
  display: inline-block;
  text-indent: -9999px;
  margin-left: 30px;
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
  background-position: -259px -866px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
`;
const FacebookBtn = styled.img`
  display: inline-block;
  text-indent: -9999px;
  margin-left: 30px;
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
  background-position: -106px -866px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
`;
const SnsImage = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  position: absolute;
  top: 62px;
  right: 0;
`;
const MpLogo = styled.div`
  display: inline-block;
  margin-right: 168px;
  vertical-align: top;
  
`;
const SmallTitle = styled.div`
  display: block;
  position: relative;
  margin-top: 28px;
  padding-top: 15px;
  font-size: 0.875rem;
  color: #6a6a6a;
`;
const MpImage = styled.img`
  width: 137px;
  //height: 45px;
  //border-image-source: none;
  //content: "";
  //border: none;
  //outline: none;
  //background-size: 137px 45px;
  //background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/mangoplate-gray-logo.svg"); 
`;

const Link = styled.a`
  display: block;
`
const Outer = styled.div`
  width: 100%;
  height: 818px;
  background-color: #3e3e3e;
`;
const Inner = styled.div`
  max-width: 1200px;
  min-height: 718px;
  background-color: #3e3e3e;
  margin: 0 auto;
  padding-top: 65px;
  position: relative;
`;
const KeywordWrap = styled.div`
  font-size: 15.5px;
  line-height: 23px;
  word-break: keep-all;
  display: block;
  margin-bottom: 30px;
  padding-top: 15px;
  border-top: 1px solid #6a6a6a;
  color: #9b9b9b;
  text-align: left;
  /* font-weight: bold; */
`;
const LanguageCopyright = styled.div`
  padding: 36px 0 42px 0;
  position: relative;
  border-top: 1px solid #6a6a6a;
  text-align: left;
  display: block;
`;
const SelectLanguage = styled.text`
  position: absolute;
  top: 47px;
  right: 0;
  font-size: 1rem;
  color: #9b9b9b;
  text-decoration: none;
  cursor: pointer;
  border: 0 none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const CompanyCopyrights = styled.div`
  border: 0 none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 0.875rem;
  color: #9b9b9b;
  line-height: 22px;
`;
export default withRouter(Footer);
