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

export const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 320px;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: ${size.mobile}) {
    width: 480px;
  }
  @media screen and (min-width: ${size.tablet}) {
    width: 768px;
  }
`;

export const WrapTitle = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 320px;

  padding: 30px 10px 41px;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  background-color: rgba(226, 52, 11, 0.7);
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23daf12d' fill-opacity='0.33' fill-rule='evenodd'/%3E%3C/svg%3E");

  @media screen and (min-width: ${size.mobile}) {
    left: 0;
  }
  @media screen and (min-width: ${size.tablet}) {
    top: 30px;
    left: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 320px;
    border-radius: 50%;
  }
  @media screen and (min-width: ${size.desktop}) {
    top: 86px;
    left: 215px;
    height: 230px;
    border-radius: 50% 50% 0 0;
    border-width: 2px 2px 0 2px;
    border-style: solid;
    border-color: black;
  }
`;

export const WrapDesc = styled.div`
  position: absolute;
  top: 280px;
  left: 0;
  width: 320px;
  padding: 40px 10px 20px;

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23daf12d' fill-opacity='0.33' fill-rule='evenodd'/%3E%3C/svg%3E");
  @media screen and (min-width: ${size.mobile}) {
    left: 120px;
  }
  @media screen and (min-width: ${size.tablet}) {
    top: 250px;
    left: 383px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    width: 250px;
    border-radius: 50%;
  }
  @media screen and (min-width: ${size.desktop}) {
    top: 316px;
    left: 215px;
    height: 200px;
    width: 320px;
    border-radius: 0 0 50% 50%;
    border-width: 0 2px 2px 2px;
    border-style: dotted;
    border-color: black;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;

  animation: ${Animation} 2s forwards;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  color: white;
`;

export const Desc = styled.h2`
  margin: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const Button = styled.button`
  position: absolute;
  top: 243px;
  left: 50%;
  transform: translateX(-50%);
  width: 65px;
  height: 65px;
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 68px 0px rgba(145, 192, 255, 0.5),
    inset 0px -9px 16px 0px rgba(145, 192, 255, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  @media screen and (min-width: ${size.mobile}) {
    top: 247px;
  }
  @media screen and (min-width: ${size.tablet}) {
    top: 260px;
    width: 100px;
    height: 100px;
    font-size: 26px;
  }
  @media screen and (min-width: ${size.desktop}) {
    top: 265px;
  }
  @media screen and (min-width: ${size.large}) {
  }
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
