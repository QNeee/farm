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
  color: #fff;
  font-size: 18px;
  padding: 7px 12px;
  border: none;
  border-radius: 5px;
  /* margin-bottom: 20px; */
  cursor: pointer;

  @media (min-width: 480px) {
    padding: 10px 20px;
  }
`;
export const HeaderStyled = styled.div`
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
