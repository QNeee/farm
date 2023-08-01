import React from 'react';
import { Link } from 'react-router-dom';

import { SubTitle, Title, Wrap, Wrapper, Button } from './HomePage.styled';
import pic from '../../images/slot777.png';

const HomePage: React.FC = () => {
  return (
    <>
      <Wrap>
        <Wrapper>
          <Title>Welcome to the Game Slot Machine!</Title>
          <SubTitle>
            Get ready for an exciting gaming experience. Spin the reels and win
            big!
          </SubTitle>
        </Wrapper>
        <img src={pic} alt="description" style={{ width: 400 }} />
        <Link to="/slots" style={{ marginBottom: 20 }}>
          <Button>Play</Button>
        </Link>
      </Wrap>
    </>
  );
};

export default HomePage;
