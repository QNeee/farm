import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  font-weight: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    min-height: 100%;
    font-weight: 500px;
    padding: 20px 20px 30px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;
