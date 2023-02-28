import React, { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import GraphByDay from "./GraphByDay";
import MetaPic from "../assets/images/Meta.png";
import { Button } from "antd";
import GraphByMonth from "./GraphByMonth";

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  margin-top: 6%;
  justify-content: center;

  @media (max-width: 620px) {
    flex-direction: column !important;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const StyledImg = styled.img`
  width: 10rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StyledGraphContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
`;

const StyledDisplayNone = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  display: none;
`;

function HomePage() {
  const [daily, setDaily] = useState();
  const [monthly, setMonthly] = useState();

  function dailyGraph() {
    setDaily(<GraphByDay />);
    setMonthly(<StyledDisplayNone />);
  }

  function monthlyGraph() {
    setMonthly(<GraphByMonth />);
    setDaily(<StyledDisplayNone />);
  }

  return (
    <>
      <StyledContainer>
        <StyledImg src={MetaPic} />
      </StyledContainer>

      {dailyGraph ? (
        <StyledGraphContainer>{daily}</StyledGraphContainer>
      ) : (
        <StyledGraphContainer>{monthly}</StyledGraphContainer>
      )}

      {monthlyGraph ? (
        <StyledGraphContainer>{monthly}</StyledGraphContainer>
      ) : (
        <StyledGraphContainer>{daily}</StyledGraphContainer>
      )}

      <StyledContainer>
        Get historical data for Meta stock price:
        <span style={{ marginLeft: "0.5%", marginRight: "4%" }}>
          <Button
            type="primary"
            style={{ marginRight: "5px" }}
            onClick={dailyGraph}
          >
            Daily
          </Button>
          <Button onClick={monthlyGraph}>Monthly</Button>
        </span>
      </StyledContainer>
      <StyledContainer>
        <span style={{ fontSize: "10px", color: "red" }}>
          Note: Coverage from January 2022 to October 2022 in Highest price
          throughout the day only
        </span>
      </StyledContainer>
    </>
  );
}

export default HomePage;
