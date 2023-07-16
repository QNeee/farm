import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Title, Description, Button } from './HomePage.styled';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Welcome to the Game Slot Machine!</Title>
      <Description>
        Get ready for an exciting gaming experience. Spin the reels and win big!
      </Description>
      <Button type="button" onClick={() => navigate('/slots')}>
        Play Now
      </Button>
    </Container>
  );
};

export default HomePage;
