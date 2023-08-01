import styled from 'styled-components';

export const MainContainer = styled.div<{ imgUrl: string }>`
  /* background-image: url(${(props) => props.imgUrl});
  background-size: cover; */

  width: 320px;
  height: 100%;

  @media (min-width: 480px) {
    padding: 10px;
    border: 1px solid black;
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

export const WrapSlots = styled.div`
  margin: 0 5px;
  background-color: silver;
  border: 10px ridge #60716c;
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  transition: background-color 3s ease-in 0s;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  /* position: relative; */
  margin: 20px 0 0;
  padding: 10px 0;
  /* gap: 10px; */
  z-index: 333;
  /* outline: 20px solid tomato; */

  border: 10px ridge #60716c;
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
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
