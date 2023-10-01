import { Button } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Overlay = styled.div`
  max-width: 900px;
  margin: auto;
  height: 100vh;
  overflow-y: hidden;

  @media (min-width: 1280px) {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Content = styled.div`
  padding-top: 6px;
  color: black;
  @media (min-width: 1280px) {
    background: rgba(0, 0, 0, 0.01);
  }
`;

export const CloseButtonIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const CombImg = styled.img`
  /* &:hover {
    width: 100px;
  } */
`;

export const Text = styled.p`
  margin: 10px;
`;

// export const Btn = styled(Button)`
//   && {
//     min-width: 33.3%;
//     margin-top: 10px;
//     padding: 2px;
//     color: #333;
//     font-size: 8px;
//     background-color: rgba(234, 194, 62, 0.8);
//     border-radius: 0;
//     border: 1px solid rgba(0, 0, 0, 0.2);
//   }
//   &&:hover {
//     color: white;
//     background-color: rgba(219, 26, 17, 0.8);
//   }
//   &&.active {
//     color: white;
//     background-color: rgba(13, 110, 43, 0.8);
//   }
//   @media (min-width: 480px) {
//     padding: 8px;
//     font-size: 16px;
//   }

//   @media (min-width: 768px) {
//     padding: 12px;
//     font-size: 18px;
//   }
// `;

export const Btn = styled.button`
  min-width: 33.3%;
  margin-top: 10px;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 2px;
  font-size: 8px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(234, 194, 62, 0.8);
  transition: 500ms ease background-color, 500ms ease color;

  &:hover {
    color: white;
    background-color: rgba(219, 26, 17, 0.8);
  }
  &:active {
    color: white;
    background-color: rgba(13, 110, 43, 0.8);
  }
  @media (min-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    padding: 12px;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 400px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

// export const ModalStyle = styled(Modal)`
//   position: relative;
//   left: 140px;
//   right: 140px;
// `;

export const SlideTransition = styled(CSSTransition)`
  &.slide-enter {
    opacity: 0;
    transform: translateX(
      ${(props) => (props.direction === 'prev' ? '-100%' : '100%')}
    );
  }

  &.slide-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 300ms ease-in-out;
  }

  &.slide-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  &.slide-exit-active {
    opacity: 0;
    transform: translateX(
      ${(props) => (props.direction === 'prev' ? '100%' : '-100%')}
    );
    transition: all 300ms ease-out-in;
  }
`;

export const ImgValCub = styled.img`
  /* max-width: 180px;
  max-height: 200px; */
`;
