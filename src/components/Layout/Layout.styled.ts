import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
  padding: 20px;
  overflow-x: hidden;

  height: 100%;

  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  @media (min-width: 768px) {
    padding: 10px;
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;
