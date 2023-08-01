import styled, { keyframes } from 'styled-components';
import { size } from '../../utils/breakpoint';

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
  width: 320px;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${size.mobile}) {
    width: 480px;
  }
  @media screen and (min-width: ${size.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${size.desktop}) {
    width: 1280px;
  }
  @media screen and (min-width: ${size.large}) {
    width: 1440px;
  }
`;

export const Wrapper = styled.div`
  animation: ${ShadowDropWebkit} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${ShadowDrop} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  border-radius: 5% 5% 100% 100%;

  padding: 10px 10px 20px;
  margin-bottom: 20px;

  @media screen and (min-width: ${size.mobile}) {
    padding: 10px 10px 50px;
  }
  @media screen and (min-width: ${size.tablet}) {
    padding: 10px 10px 60px;
  }
  @media screen and (min-width: ${size.desktop}) {
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

export const Button = styled.button`
  margin-top: 20px;
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
// `;

// export const Title = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 1rem;
// `;

// export const Description = styled.p`
//   font-size: 1.2rem;
//   margin-bottom: 2rem;
// `;

// export const Button = styled.button`
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;
