import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserEmail, getUserId } from '../../redux/auth/authSelectors';

import PassForm from './PassForm';
import PhoneChange from './PhoneChange';
import {
  MdAccessibilityNew,
  MdLockOutline,
  MdOutlineMailOutline,
  MdOutlinePersonPin,
} from 'react-icons/md';

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
          <p style={{ fontWeight: 500, marginBottom: 8 }}>Ваш ID</p>
          <div
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: '45px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 5,
            }}
          >
            <MdOutlinePersonPin
              style={{
                position: 'absolute',
                top: '50%',
                left: 14,
                transform: 'translateY(-50%)',
                color: 'rgba(0,0,0,0.75)',
                width: 18,
                height: 18,
              }}
            />
            <div
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '0 5px 5px 0',
                outline: 'none',
                border: 'none',
                borderLeft: '1px solid rgba(0,0,0,0.35)',
                backgroundColor: 'white',
                color: 'black',
              }}
            >
              {userId}
            </div>
          </div>
        </Li>
        <Li>
          <p style={{ fontWeight: 500, marginBottom: 8 }}>Ваш Email</p>
          <div
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: '45px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 5,
            }}
          >
            <MdOutlineMailOutline
              style={{
                position: 'absolute',
                top: '50%',
                left: 14,
                transform: 'translateY(-50%)',
                color: 'rgba(0,0,0,0.75)',
                width: 18,
                height: 18,
              }}
            />
            <div
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '0 5px 5px 0',
                outline: 'none',
                border: 'none',
                borderLeft: '1px solid rgba(0,0,0,0.35)',
                backgroundColor: 'white',
                color: 'black',
              }}
            >
              {userEmail}
            </div>
          </div>
        </Li>
        <Li>
          <p style={{ fontWeight: 500, marginBottom: 8 }}>Ваше Ім'я на сайті</p>
          <div
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: '45px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 5,
            }}
          >
            <MdAccessibilityNew
              style={{
                position: 'absolute',
                top: '50%',
                left: 14,
                transform: 'translateY(-50%)',
                color: 'rgba(0,0,0,0.75)',
                width: 18,
                height: 18,
              }}
            />
            <div
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '0 5px 5px 0',
                outline: 'none',
                border: 'none',
                borderLeft: '1px solid rgba(0,0,0,0.35)',
                backgroundColor: 'white',
                color: 'black',
              }}
            >
              {userNickName}
            </div>
          </div>
        </Li>

        <PhoneChange />

        <Li>
          <PassForm />
        </Li>
      </ul>
    </Container>
  );
};

export default Profile;
