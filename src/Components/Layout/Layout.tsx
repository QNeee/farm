import React from 'react';
import { Outlet } from 'react-router-dom';

import {Container} from './Layout.styled'
import Header from '../Header';

const Layout: React.FC = ({ children }: any) => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
