import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLanguage } from '../../redux/auth/authSelectors';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BonusesContainer = styled.div`
  min-width: 300px;
  min-height: 150px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  /* outline: 1px solid tomato; */
  margin-top: 30px;
  margin-bottom: 100px;
`;

const Bonuses = () => {
  const language = useSelector(getLanguage);
  return (
    <Container>
      <BonusesContainer>{language === 'en' ? 'No bonuses available' : language === 'ru' ? 'Бонусы не доступны' : 'Бонуси не доступні'}</BonusesContainer>
    </Container>
  );
};

export default Bonuses;
