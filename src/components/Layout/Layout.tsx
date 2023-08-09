import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Wrapper } from './Layout.styled';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout: React.FC = ({ children }: any) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
