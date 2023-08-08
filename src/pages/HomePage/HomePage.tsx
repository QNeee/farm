import React from 'react';
import { Link } from 'react-router-dom';

import {
  Desc,
  Title,
  Wrap,
  WrapDesc,
  WrapTitle,
  Button,
} from './HomePage.styled';
import pic from '../../images/slot777.png';
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
            gaming experience.
          </Desc>
          <Desc>
            Spin the reels <br />
            and win big!
          </Desc>
        </WrapDesc>
        {/* <img src={pic} alt="description" style={{ width: 400 }} /> */}

        <Link to={loggedIn ? "/slots" : "/demoSlots"} style={{ marginTop: 20 }}>
          <Button>Play</Button>
        </Link>
      </Wrap>
    </>
  );
};

export default HomePage;
