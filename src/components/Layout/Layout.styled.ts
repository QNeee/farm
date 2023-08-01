import styled from 'styled-components';
import { size } from '../../utils/breakpoint';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 320px;
  min-height: calc(100% - 60px);
  margin: 0 auto;
  padding: 10px 0;
  /* outline: 1px solid tomato; */

  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 1);

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
