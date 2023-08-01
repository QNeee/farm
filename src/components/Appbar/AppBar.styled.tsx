import styled, { keyframes } from 'styled-components';

const Test = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  /* gap: 16px; */
  /* background-color: rgba(255, 0, 0, 0.1); */

  background: linear-gradient(
    -45deg,
    rgba(238, 119, 82, 0.4),
    rgba(255, 150, 34, 0.4),
    rgba(111, 143, 18, 0.4),
    rgba(35, 213, 171, 0.4)
  );
  background-size: 200% 200%;
  animation: ${Test} 15s ease infinite;

  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserEmail = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const Modal = styled.div`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
