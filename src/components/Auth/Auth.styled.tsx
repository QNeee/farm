import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 320px;
  margin: 0 auto;
  padding: 20px;

  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  @media (min-width: 480px) {
    width: 340px;
    padding: 30px 30px 40px;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    width: 500px;
    padding: 40px 35px;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 24px;
  @media (min-width: 480px) {
    margin-bottom: 25px;
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 28px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 480px) {
    margin-bottom: 17px;
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  @media (min-width: 480px) {
    padding: 6px 10px;
  }
  @media (min-width: 768px) {
    padding: 10px 15px;
  }
  &::placeholder {
    font-size: 12px;
    @media (min-width: 480px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(234, 194, 62, 0.8);
  transition: 500ms ease background-color, 500ms ease color;
  &:hover {
    transition: 1s background-color;
    color: white;
    background-color: rgba(219, 26, 17, 0.8);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 8px 16px;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(234, 194, 62, 0.8);
  transition: 500ms ease background-color, 500ms ease color;
  &:hover {
    transition: 1s background-color;
    color: white;
    background-color: rgba(219, 26, 17, 0.8);
  }
`;
