import { Field, ErrorMessage } from 'formik';
import styled, { css } from 'styled-components';

interface WrapErrorProps {
  hasError: boolean;
}

export const WrapError = styled.div<WrapErrorProps>`
  position: relative;

  /* background-color: rgba(255, 255, 255, 0.5); */
  margin-bottom: 18px;
  ${(props) =>
    props.hasError &&
    css`
      & input {
        /* border: 1px solid rgba(219, 26, 17, 0.8); */
      }
      & label {
        /* color: rgba(219, 26, 17, 0.8); */
      }
      & input::placeholder {
        /* color: rgba(219, 26, 17, 0.8); */
      }
    `}
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -100%;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3px 10px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  font-size: 13px;
  background-color: rgba(219, 26, 17, 0.8);
`;
