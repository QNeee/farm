import { Field, Form, Formik } from 'formik';
import { GiSmartphone } from 'react-icons/gi';
import {
  MdAccessibilityNew,
  MdOutlineMailOutline,
  MdOutlinePersonPin,
} from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;

  @media (min-width: 480px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    padding: 25px 20px 30px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;
export const Subtitle = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Box = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  color: rgba(0, 0, 0, 0.8);
`;
export const FormPhone = styled(Form)`
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxInput = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0 5px 5px 0;
  font-family: 'Roboto Mono Variable';
  font-size: 18;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0 5px 5px 0;
  font-family: 'Roboto Mono Variable';
  font-size: 18;
  outline: none;
  border: 0;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  background-color: rgba(255, 255, 255, 0.95);
  border-right: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 5px 0 0 5px;
  cursor: pointer;
`;

export const IconId = styled(MdOutlinePersonPin)`
  width: 20px;
  height: 20px;
`;
export const IconEmail = styled(MdOutlineMailOutline)`
  width: 20px;
  height: 20px;
`;
export const IconName = styled(MdAccessibilityNew)`
  width: 20px;
  height: 20px;
`;
export const IconPhone = styled(GiSmartphone)`
  width: 20px;
  height: 20px;
`;

export const CopiedText = styled.span`
  color: rgba(13, 110, 43, 0.8);
`;
