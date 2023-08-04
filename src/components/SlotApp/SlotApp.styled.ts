import styled, { keyframes } from 'styled-components';

const Position = keyframes` 
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  `;

export const MainContainer = styled.div<{ imgUrl: string }>`
  /* background-image: url(${(props) => props.imgUrl});
  background-size: cover; */

  width: 320px;
  height: 100%;

  @media (min-width: 480px) {
    padding: 10px;
    background-color: rgba(255, 255, 0, 0.2);
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 600px;
    padding: 50px;
  }
`;
export const Container = styled.div`
  /* outline: 20px solid tomato; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapSlots = styled.div<{ win: boolean }>`
  position: relative;
  flex-shrink: 0;
  overflow: unset;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    background: #333;
    background-image: linear-gradient(
      45deg,
      #ff3c41,
      #ff8a25,
      #ffe04f,
      #4fff88,
      #56ffef,
      #37b4ff,
      #c05aff,
      #ff3c41,
      #ff8a25,
      #ffe04f,
      #4fff88,
      #56ffef,
      #37b4ff,
      #c05aff
    );
    background-size: 500%;

    animation-name: ${(props) => {
      if (props.win) {
        return Position;
      } else {
        return 'none';
      }
    }};
    animation-duration: 12s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    /* animation: ${Position} 12s linear infinite alternate; */
    z-index: -1;
  }

  &::after {
    filter: blur(10px);
  }
`;

export const ButtonsContainer = styled.div<{ win: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 20px 0 0;
  padding: 10px 0;
  background-color: white;

  position: relative;
  flex-shrink: 0;
  overflow: unset;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    background-color: #333;
    background-image: linear-gradient(
      45deg,
      #ff3c41,
      #ff8a25,
      #ffe04f,
      #4fff88,
      #56ffef,
      #37b4ff,
      #c05aff,
      #ff3c41,
      #ff8a25,
      #ffe04f,
      #4fff88,
      #56ffef,
      #37b4ff,
      #c05aff
    );
    background-size: 500%;

    animation-name: ${(props) => {
      if (props.win) {
        return Position;
      } else {
        return 'none';
      }
    }};
    animation-duration: 12s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    /* animation: ${Position} 12s linear infinite alternate; */
    z-index: -1;
  }

  &::after {
    filter: blur(10px);
  }
`;
export const SpinButton = styled.button<{ primary: boolean }>`
  background-color: ${(props) => (!props.primary ? '#ff4081' : 'grey')};
  padding: 10px 10px;
  text-transform: uppercase;
  cursor: pointer;

  /* backdrop-filter: blur(5px);
  border-radius: 47px;
  box-shadow: 0px 0px 68px 0px rgba(145, 192, 255, 0.5),
    inset 0px -9px 16px 0px rgba(145, 192, 255, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255); */
  &:hover {
    border: 2px solid darkblue;
  }

  @media (min-width: 480px) {
    padding: 10px 20px;
  }
  @media (min-width: 768px) {
    padding: 10px 30px;
  }
`;
export const HeaderStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 15px;
  padding: 20px;
  color: #fff;
  background-color: #333;
  font-family: 'Arial', sans-serif;
  /* font-size: 10px; */

  /* @media (min-width: 480px) {
    font-size: 24px;
  } */
  /* @media (min-width: 768px) {
    font-size: 18px;
  } */
`;

export const Balance = styled.div`
  font-size: 16px;
  margin-right: 10px;
  @media (min-width: 480px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const LineCount = styled.div`
  font-size: 14px;
  margin-left: 10px;
  @media (min-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Span = styled.span<{ primary: boolean }>`
  color: ${(props) => (props.primary ? 'red' : 'green')};
`;

export const LottieLamp = styled.div`
  height: 48px;
  width: 48px;
  position: absolute;
  top: -7px;
  right: -7px;
  z-index: 1;
  cursor: pointer;
`;
