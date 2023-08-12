import styled from 'styled-components';
import { size } from '../utils/breakpoint';

export const Wrapper = styled.div`
  min-width: 100%;
  /* min-height: 100%; */
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px 0;

  @media (min-width: ${size.mobile}) {
    width: 480px;
    padding: 20px 20px;
  }
  @media (min-width: ${size.tablet}) {
    width: 768px;
    padding: 20px 10px 20px;
  }
  @media (min-width: ${size.desktop}) {
    width: 1280px;
  }
  @media (min-width: ${size.large}) {
    width: 1440px;
  }
`;
