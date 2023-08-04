import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 10px 40px;
  text-transform: uppercase;
  cursor: pointer;

  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 47px;
  box-shadow: 0px 0px 68px 0px rgba(145, 192, 255, 0.5),
    inset 0px -9px 16px 0px rgba(145, 192, 255, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  &:hover {
    border: 2px solid darkblue;
  }
`;
