import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';
import styled, { css } from 'styled-components';

interface WrapErrorProps {
  hasError: boolean;
}

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  margin: 0 auto;
  padding: 30px 20px 40px;

  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  @media (min-width: 480px) {
    width: 400px;
    padding: 30px 30px 40px;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    width: 500px;
    padding: 50px 35px 60px;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  @media (min-width: 480px) {
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    margin-bottom: 35px;
    font-size: 28px;
  }
`;

export const WrapError = styled.div<WrapErrorProps>`
  position: relative;
  background-color: white;
  margin-bottom: 18px;
  z-index: 1;
  ${(props) =>
    props.hasError &&
    css`
      & input {
        border: 1px solid rgba(219, 26, 17, 0.8);
      }
      & label {
        color: rgba(219, 26, 17, 0.8);
      }
      & input::placeholder {
        color: rgba(219, 26, 17, 0.8);
      }
    `}
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: -40%;
  left: 90px;
  transform: translate(0, 40%);
  z-index: 20;
  border: 1px solid rgba(219, 26, 17, 0.8);
  padding: 3px 10px;
  border-radius: 5px;
  color: rgba(219, 26, 17, 0.8);
  font-size: 10px;
  @media (min-width: 480px) {
    font-size: 12px;
    padding: 1px 10px;
  }
  @media (min-width: 768px) {
    left: 110px;
    font-size: 14px;
    padding: 2px 10px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-40%);
  z-index: 1;
  @media (min-width: 480px) {
    transform: translateY(-45%);
  }
  @media (min-width: 768px) {
    transform: translateY(-40%);
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 13px 8px 13px 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  color: #666;

  @media (min-width: 480px) {
    padding: 14px 8px 13px 32px;
  }
  @media (min-width: 768px) {
    padding: 18px 15px 18px 40px;
    font-size: 16px;
  }
  &::placeholder {
    font-size: 14px;
    @media (min-width: 480px) {
      font-size: 16px;
    }
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
