import React from "react";
import styled from "styled-components";
import NearStore from "./NearStore";
import MapAPI from "./Map";

const DetailSide = (props) => {
  return (
    <ColumnSide>
      <MapContainer>
        <MapAPI />
      </MapContainer>
      <Inner>
        <NearStores>
          <NearStoreTitle>주변 인기 식당</NearStoreTitle>
          <NearStoreList>
            <NearStore />
            <NearStore />
            <NearStore />
            <NearStore />
          </NearStoreList>
        </NearStores>
      </Inner>
    </ColumnSide>
  );
};

const ColumnSide = styled.div`
  height: 100%;
  width: 400px;
  padding-bottom: 50px;
  overflow: hidden;
`;

const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
  /* background: url(https://i0.wp.com/magazine.contenta.co/wp-content/uploads/2015/12/-e1452007860210.gif?fit=600%2C389&ssl=1); */
  display: block;
  height: 328px;
  width: 100%;
  cursor: pointer;
`;

const Inner = styled.div`
  box-sizing: border-box;
  padding: 0 24px;
  width: 400px;
  margin: 0 auto;
`;

const NearStores = styled.div`
  padding-top: 30px;
`;

const NearStoreTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2em;
  color: #ff792a;
  text-align: left;
`;

const NearStoreList = styled.div`
  margin-top: 10px;
`;

export default DetailSide;
