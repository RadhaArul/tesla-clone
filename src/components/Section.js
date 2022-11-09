import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
  range,
  speed,
  topspeed,
  mph,
}) {
  return (
    <SectionContainer bgImg={backgroundImage}>
      <Fade bottom>
        <TextItem>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextItem>
      </Fade>
      <Buttons>
        <Fade bottom>
          {leftBtnText && (
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ButtonGroup>
          )}
          <DetailsButtonGroups>
            <WrapGroup>
              <Wrape>
                <h1>{range}</h1>
                {range && <p>Range(EPA est.)</p>}
              </Wrape>
              <Wrape>
                <h1>{speed}</h1>
                {speed && <p>0-60 mph*</p>}
              </Wrape>
              <Wrape>
                <h1>{topspeed}</h1>
                {topspeed && <p>Top Speed*</p>}
              </Wrape>
              <SmallScreen>
                <Wrape>
                  {mph && <h1>{mph}</h1>}
                  {mph && <p>Peak Power</p>}
                </Wrape>
              </SmallScreen>
            </WrapGroup>
            {range && <RightButton>Order Now</RightButton>}
          </DetailsButtonGroups>
        </Fade>
        <Arrow src="/images/down-arrow.svg"></Arrow>
      </Buttons>
    </SectionContainer>
  );
}

export default Section;

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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 10px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-image: url("/images/model-s.jpg"); */
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
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
