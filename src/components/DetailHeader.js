import React from "react";
import styled from "styled-components";
// import { history } from "../redux/configureStore";
import { Grid } from "../elements/Index";
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
          <Header_logo>
            <Logo
              src={DetailLogo}
              onClick={(props) => {
                document.location.href = "/";
              }}
            />
          </Header_logo>
          <Header_SearchBox>
            <SearchIcon className={classes.search_icon} fontSize="50" />
            <searchLabel>
              <Input_text />
            </searchLabel>
          </Header_SearchBox>
          <Header_MenuList>
            <Header_MenuItem>
              <Header_MenuLink>
                <Header_MenuText>EAT딜</Header_MenuText>
              </Header_MenuLink>
            </Header_MenuItem>
            <Header_MenuItem>
              <Header_MenuLink>
                <Header_MenuText>맛집 리스트</Header_MenuText>
              </Header_MenuLink>
            </Header_MenuItem>
            <Header_MenuItem>
              <Header_MenuLink>
                <Header_MenuText>망고스토리</Header_MenuText>
              </Header_MenuLink>
            </Header_MenuItem>
          </Header_MenuList>
          <Header_IconButtonList>
            <Header_IconButton>
              <Badge badgeContent={5} color="error">
                <PermIdentityIcon className={classes.PermIdentityIcon} />
              </Badge>
            </Header_IconButton>
          </Header_IconButtonList>
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
  z-index: 900;
  height: 61px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0 4px 11px rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;

const Header_logo = styled.i`
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

const Header_SearchBox = styled.div`
  min-width: 0;
  width: 30vw;
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

const searchLabel = styled.label`
  /* background-size: auto; */
  align-items: center;
  height: 50px;
  min-width: 0;
  overflow: hidden;
  width: 70%;
`;

const Header_MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  height: 100%;
  box-orient: horizontal;
  margin: auto;
  padding-inline-start: 0px;
`;

const Header_MenuItem = styled.li`
  display: flex;
  justify-content: center;
  box-pack: center;
  align-items: center;
  box-align: center;
  width: 130px;
  border-left: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const Header_MenuLink = styled.a`
  display: flex;
  justify-content: center;
  box-pack: center;
  align-items: center;
  box-align: center;
  box-flex: 1;
  flex: 1;
  height: 100%;
`;

const Header_MenuText = styled.span`
  position: relative;
  display: flex;
  font-size: 16px;
  color: #888888;
  font-weight: bold;
`;

const Header_IconButtonList = styled.ul`
  display: flex;
  height: 100%;
  padding-inline-start: 0px;
`;

const Header_IconButton = styled.li`
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

const Input_text = styled.input.attrs({
  type: "text",
  placeholder: "지역, 식당 또는 음식",
  autocomplete: "off",
  maxlength: "50",
})`
  height: 30px;
  border: 0;
  font-size: 20px;
  border-color: black;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  cursor: text;
  margin: 0em;
  border-color: none;
  outline: none;
`;

export default DetailHeader;
