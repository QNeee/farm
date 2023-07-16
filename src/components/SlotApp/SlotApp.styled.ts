import styled from 'styled-components';

export const MainContainer = styled.div<{ imgUrl: string }>`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonsContainer = styled.div`
position: relative;
z-index: 333;
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;
export const SpinButton = styled.button<{ primary: boolean }>`
  background-color: ${(props) => (!props.primary ? '#ff4081' : 'grey')};
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const HeaderStyled = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
  font-size: 24px;

  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Balance = styled.div`
  font-size: 18px;
  margin-right: 10px;
`;

export const LineCount = styled.div`
  font-size: 18px;
  margin-left: 10px;
`;
export const Span = styled.span<{ primary: boolean }>`
  color: ${(props) => (props.primary ? 'red' : 'green')};
`;
