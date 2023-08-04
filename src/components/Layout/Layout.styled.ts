import styled from 'styled-components';
import { size } from '../../utils/breakpoint';

export const Wrapper = styled.div`
  position: fixed;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 320px;
  min-height: calc(100vh - 60px);
  margin: 0 auto;
  padding: 10px 0;
  /* outline: 1px solid black; */

  @media (min-width: ${size.mobile}) {
    width: 480px;
    padding: 20px 20px;
  }
  @media (min-width: ${size.tablet}) {
    width: 768px;
    padding: 20px 10px;
  }
  @media (min-width: ${size.desktop}) {
    width: 1280px;
  }
  @media (min-width: ${size.large}) {
    width: 1440px;
  }
`;
