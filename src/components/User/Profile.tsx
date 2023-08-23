import { useSelector } from 'react-redux';
import { getUserEmail, getUserId } from '../../redux/auth/authSelectors';

import PassForm from './PassForm';
import PhoneChange from './PhoneChange';

import { useState } from 'react';
import {
  Box,
  BoxIcon,
  BoxInput,
  Container,
  CopiedText,
  IconEmail,
  IconId,
  IconName,
  Li,
  Subtitle,
  Title,
} from './Profile.styled';

const Profile = () => {
  const userId = useSelector(getUserId);
  const userEmail = useSelector(getUserEmail);
  const userNickName = userEmail?.split('@')[0];
  const [copiedId, setCopiedId] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedName, setCopiedName] = useState(false);

  const handleCopyToClipboard = (text: string, iconName: string) => {
    navigator.clipboard.writeText(text);

    if (iconName === 'id') {
      setCopiedId(true);
      setTimeout(() => {
        setCopiedId(false);
      }, 2000);
    } else if (iconName === 'email') {
      setCopiedEmail(true);
      setTimeout(() => {
        setCopiedEmail(false);
      }, 2000);
    } else if (iconName === 'name') {
      setCopiedName(true);
      setTimeout(() => {
        setCopiedName(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Title>Ваш профіль</Title>
      <ul>
        <Li>
          <Subtitle>Ваш ID</Subtitle>
          <Box>
            <BoxIcon
              onClick={() =>
                userId !== null &&
                handleCopyToClipboard(userId.toString(), 'id')
              }
            >
              <IconId />
            </BoxIcon>
            <BoxInput>
              {copiedId ? (
                <CopiedText>
                  Copied
                  <span> &#x2713;</span>
                </CopiedText>
              ) : (
                userId
              )}
            </BoxInput>
          </Box>
        </Li>
        <Li>
          <Subtitle>Ваш Email</Subtitle>
          <Box>
            <BoxIcon
              onClick={() =>
                userEmail !== null &&
                handleCopyToClipboard(userEmail.toString(), 'email')
              }
            >
              <IconEmail />
            </BoxIcon>
            <BoxInput>
              {copiedEmail ? (
                <CopiedText>
                  Copied
                  <span> &#x2713;</span>
                </CopiedText>
              ) : (
                userEmail
              )}
            </BoxInput>
          </Box>
        </Li>
        <Li>
          <Subtitle>Ваше Ім'я на сайті</Subtitle>
          <Box>
            <BoxIcon
              onClick={() =>
                userNickName !== null &&
                handleCopyToClipboard(userNickName.toString(), 'name')
              }
            >
              <IconName />
            </BoxIcon>
            <BoxInput>
              {copiedName ? (
                <CopiedText>
                  Copied
                  <span> &#x2713;</span>
                </CopiedText>
              ) : (
                userNickName
              )}
            </BoxInput>
          </Box>
        </Li>

        <Li>
          <PhoneChange />
        </Li>
        <Li>
          <PassForm />
        </Li>
      </ul>
    </Container>
  );
};

export default Profile;
