import styled from 'styled-components';

export const Overlay = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
  width: 200px;
  height: 200px;
  z-index: 101; */
`;

export const Content = styled.div`
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  background: #fff;
  padding: 20px;
  color: black;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CombImg = styled.img`
  &:hover {
    width: 100px;
  }
`;

export const TextLi = styled.li`
  border: 3px solid black;
  display: flex;
`;
