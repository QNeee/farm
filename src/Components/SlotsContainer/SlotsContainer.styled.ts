import styled from 'styled-components';

export const ListContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export  const ListItem = styled.li<{ isSmallScreen: boolean }>`
  display: ${({ isSmallScreen }) => (isSmallScreen ? 'block' : 'flex')};
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
  }
`;

export  const Bullet = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
  margin-bottom: 10px;
`;

export  const Text = styled.span`
  color: white;
  background-color: blue;
  font-size: 16px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
`;

export  const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
`;
