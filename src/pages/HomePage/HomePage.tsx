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
import { getIsLoggedIn, getLanguage } from '../../redux/auth/authSelectors';

const HomePage: React.FC = () => {
  const loggedIn = useSelector(getIsLoggedIn);
  const language = useSelector(getLanguage);
  return (
    <>
      <Wrap>
        <WrapTitle>
          <Title>
            {language === 'en' ? 'Welcome' : language === 'ru' ? 'Добро пожаловать' : 'Ласкаво просимо'}
            <br />{language === 'en' ? 'to the Game Slot Machine!' : language === 'ru' ? 'в игру Слот Машина' : 'до гри Слот Машина'}
          </Title>
        </WrapTitle>
        <WrapDesc>
          <Desc>
            {language === 'en' ? 'Get ready' : language === 'ru' ? 'Будь готов' : 'Будь готовий'}
            <br />{language === 'en' ? ' for an exciting' : language === 'ru' ? 'до захватывающего' : 'до захоплюючого'}
            <br />
            {language === 'en' ? 'gaming experience' : language === 'ru' ? 'игрового опыта' : 'ігрового досвіду'}
            <br />
            <br />
            {language === 'en' ? 'Spin the reels' : language === 'ru' ? 'Крути барабани' : 'Обертай барабани'}
            <br />
            {language === 'en' ? 'and win big!' : language === 'ru' ? 'и выигрывай много!' : 'і вигравай багато'}
          </Desc>
        </WrapDesc>
        {/* <img src={pic} alt="description" style={{ width: 140 }} /> */}

        <LinkStyle
          to={loggedIn ? '/slots' : '/demoSlots'}
        // style={{ marginTop: 20 }}
        >
          <Button>{language === 'en' ? 'Play' : language === 'ru' ? 'Играть' : 'Грати'}
          </Button>
        </LinkStyle>
      </Wrap>
    </>
  );
};

export default HomePage;
