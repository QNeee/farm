import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserEmail, getUserId } from '../../redux/auth/authSelectors';

import PassForm from './PassForm';
import PhoneChange from './PhoneChange';

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;

  @media (min-width: 480px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    padding: 25px 20px 30px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Profile = () => {
  const userId = useSelector(getUserId);
  const userEmail = useSelector(getUserEmail);
  const userNickName = userEmail?.split('@')[0];

  return (
    <Container>
      <h2 style={{ marginBottom: 20, textAlign: 'center' }}>Ваш профіль</h2>
      <ul>
        <Li>
          <p style={{ fontWeight: 500 }}>Ваш ID</p> {userId}
        </Li>
        <Li>
          <p style={{ fontWeight: 500 }}>Ваш Email</p> {userEmail}
        </Li>
        <Li>
          <p style={{ fontWeight: 500 }}>Ваше Ім'я на сайті</p> {userNickName}
        </Li>
        <Li>
          <p style={{ fontWeight: 500 }}>Ваш номер Телефону</p>
          <PhoneChange />
        </Li>
      </ul>
      <PassForm />
    </Container>
  );
};

export default Profile;
