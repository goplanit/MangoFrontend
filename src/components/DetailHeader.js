import React from "react";
import styled from "styled-components";
// import { history } from "../redux/configureStore";
import { Grid } from "../elements/index";
import DetailLogo from "../shared/DetailLogo.png";

// material-ui
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
  search_icon: {
    color: grey[400],
    fontSize: "inherit",
    width: 38,
    height: 38,
    marginRight: 13,
  },
  PermIdentityIcon: {
    margin: -7,
    color: grey[400],
    fontSize: "large",
    width: 38,
    height: 38,
  },
}));

const DetailHeader = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid>
        <Header>
          <HeaderLogo>
            <Logo
              src={DetailLogo}
              onClick={(props) => {
                document.location.href = "/";
              }}
            />
          </HeaderLogo>
          <HeaderSearchBox>
            <SearchIcon className={classes.search_icon} fontSize="large" />
            <SearchLabel>
              <InputText />
            </SearchLabel>
          </HeaderSearchBox>
          <HeaderMenuList>
            <HeaderMenuItem>
              <HeaderMenuLink>
                <HeaderMenuText>EAT딜</HeaderMenuText>
              </HeaderMenuLink>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <HeaderMenuLink>
                <HeaderMenuText>맛집 리스트</HeaderMenuText>
              </HeaderMenuLink>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <HeaderMenuLink>
                <HeaderMenuText>망고스토리</HeaderMenuText>
              </HeaderMenuLink>
            </HeaderMenuItem>
          </HeaderMenuList>
          <HeaderIconButtonList>
            <HeaderIconButton>
              <Badge badgeContent={5} color="error">
                <PermIdentityIcon className={classes.PermIdentityIcon} />
              </Badge>
            </HeaderIconButton>
          </HeaderIconButtonList>
        </Header>
      </Grid>
    </React.Fragment>
  );
};

const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  box-pack: start;
  justify-content: flex-start;
  align-items: center;
  box-align: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  height: 61px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0 4px 11px rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;

const HeaderLogo = styled.i`
  display: flex;
  justify-content: center;
  box-pack: center;
  box-direction: normal;
  box-orient: horizontal;
  margin: 0 25px;
`;

const Logo = styled.img`
  width: 100px;
  height: 33px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeaderSearchBox = styled.div`
  min-width: 0;
  width: 100vw;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-align: center;
  box-flex: 1;
  flex-shrink: 1;
  box-direction: normal;
  box-orient: horizontal;
  margin: 0;
`;

const SearchLabel = styled.label`
  /* background-size: auto; */
  align-items: center;
  height: 50px;
  min-width: 0;
  overflow: hidden;
  width: 70%;
`;

const HeaderMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  height: 100%;
  width: 100%;
  box-orient: horizontal;
  margin: auto;
  padding-inline-start: 0px;
  justify-content: flex-end;
`;

const HeaderMenuItem = styled.li`
  display: flex;
  justify-content: center;
  box-pack: center;
  align-items: center;
  box-align: center;
  width: 130px;
  border-left: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const HeaderMenuLink = styled.a`
  display: flex;
  justify-content: center;
  box-pack: center;
  align-items: center;
  box-align: center;
  box-flex: 1;
  flex: 1;
  height: 100%;
`;

const HeaderMenuText = styled.span`
  position: relative;
  display: flex;
  font-size: 16px;
  color: #888888;
  font-weight: 600;
`;

const HeaderIconButtonList = styled.ul`
  display: flex;
  height: 100%;
  padding-inline-start: 0px;
`;

const HeaderIconButton = styled.li`
  display: flex;
  justify-content: center;
  height: 100%;
  box-pack: center;
  align-items: center;
  box-align: center;
  width: 85px;
  height: 100%;
  border-left: 1px solid #dbdbdb;
  cursor: pointer;
`;

const InputText = styled.input.attrs({
  type: "text",
  placeholder: "지역, 식당 또는 음식",
  autocomplete: "off",
})`
  height: 30px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  border-color: black;
  cursor: text;
  margin: 0em;
  border-color: none;
  outline: none;
  width: 100vw;
`;

export default DetailHeader;
