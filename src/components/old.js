import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

function ModelS() {
  document.title = "Model S | Tesla";
  return (
    <Container>
      <Fade bottom>
        <TextItem>
          <h1>Model S</h1>
          <p>Plaid</p>
        </TextItem>
      </Fade>
      <Buttons>
        <Fade bottom>
          <DetailsButtonGroups>
            <WrapGroup>
              <Wrape>
                <h1>396mi</h1>
                <p>Range(EPA est.)</p>
              </Wrape>
              <Wrape>
                <h1>1.99s</h1>
                <p>0-60 mph*</p>
              </Wrape>
              <Wrape>
                <h1>200 mph</h1>
                <p>Top Speed*</p>
              </Wrape>
              <SmallScreen>
                <Wrape>
                  <h1>1,020 hp</h1>
                  <p>Peak Power</p>
                </Wrape>
              </SmallScreen>
            </WrapGroup>
            <RightButton>Order Now</RightButton>
          </DetailsButtonGroups>
        </Fade>
        <Arrow src="/images/down-arrow.svg"></Arrow>
      </Buttons>
    </Container>
  );
}

export default ModelS;
const SmallScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const WrapGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;
const RightButton = styled.div`
  height: 40px;
  width: 200px;
  font-size: 14px;
  color: white;
  border: 4px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrape = styled.div`
  height: 40px;
  width: 200px;
  h1 {
    text-spacing: 1px;
    font-size: 30px;
    font-weight: 500;
    color: white;
  }
  p {
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

const DetailsButtonGroups = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const animate = keyframes`
0%,20%,50%,80%,100%{transform:translateY(0);}
40%{transform:translateY(5px);}
60%{transform:translateY(3px);}
`;
const Buttons = styled.div``;
const Arrow = styled.img`
  height: 40px;
  animation-name: ${animate};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    margin-top: 10px;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
