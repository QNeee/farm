import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
		0% {
			transform:translateX(0%);
			transform-origin:50% 50%;
		}
		15% {
			transform:translateX(-30px) rotate(6deg);
		}
		30% {
			transform:translateX(15px) rotate(-6deg);
		}
		45% {
			transform:translateX(-15px) rotate(3.6deg);
		}
		60% {
			transform:translateX(9px) rotate(-2.4deg);
		}
		75% {
			transform:translateX(-6px) rotate(1.2deg);
		}
		100% {
			transform:translateX(0%);
			transform-origin:50% 50%;
		}
`;

const ShadowDrop = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }

  100% {  
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
`;

const ShadowDropWebkit = keyframes` 
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
  `;

export const Wrap = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 15px;
  gap: 40px;

  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5),
    inset -0px -0px 16px 0px rgba(145, 192, 255, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Wrapper = styled.div`
  animation: ${ShadowDropWebkit} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${ShadowDrop} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  border-radius: 5% 5% 100% 100%;

  padding: 10px 10px 20px;
  margin-top: 50px;

  @media screen and (min-width: 480px) {
    padding: 10px 10px 50px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 10px 60px;
  }
  @media screen and (min-width: 1440px) {
    padding: 10px 10px 60px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;

  animation: ${Animation} 2s forwards;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
`;

export const SubTitle = styled.h2`
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
