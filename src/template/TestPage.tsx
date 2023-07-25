import { Link } from 'react-router-dom';
import TestMenu from './TestMenu';
import { Button } from './Button';
import { SubTitle, Title, Wrap, Wrapper } from './TestPage.styled';
import pic from '../images/slot777.png';

const TestPage = () => {
  return (
    <>
      <TestMenu />
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

export default TestPage;
