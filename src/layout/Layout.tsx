import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Wrapper } from './Layout.styled';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

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
