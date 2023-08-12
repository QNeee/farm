import React from 'react';

import {
  Desc,
  Title,
  Wrap,
  WrapDesc,
  WrapTitle,
  Button,
  LinkStyle,
} from './HomePage.styled';

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const HomePage: React.FC = () => {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Wrap>
        <WrapTitle>
          <Title>
            Welcome <br /> to the Game Slot Machine!
          </Title>
        </WrapTitle>
        <WrapDesc>
          <Desc>
            Get ready
            <br /> for an exciting <br />
            gaming experience
            <br />
            <br />
            Spin the reels <br />
            and win big!
          </Desc>
        </WrapDesc>
        {/* <img src={pic} alt="description" style={{ width: 140 }} /> */}

        <LinkStyle
          to={loggedIn ? '/slots' : '/demoSlots'}
          // style={{ marginTop: 20 }}
        >
          <Button>Play</Button>
        </LinkStyle>
      </Wrap>
    </>
  );
};

export default HomePage;
