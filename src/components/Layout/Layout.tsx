import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Wrapper } from './Layout.styled';
import Header from '../Header';

const Layout: React.FC = ({ children }: any) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default Layout;
