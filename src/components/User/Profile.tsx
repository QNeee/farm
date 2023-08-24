import { useSelector } from 'react-redux';
import {
  getLanguage,
  getUserEmail,
  getUserId,
} from '../../redux/auth/authSelectors';

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
  const language = useSelector(getLanguage);
  const handleCopyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);

    if (field === 'id') {
      setCopiedId(true);
      setTimeout(() => {
        setCopiedId(false);
      }, 2000);
    } else if (field === 'email') {
      setCopiedEmail(true);
      setTimeout(() => {
        setCopiedEmail(false);
      }, 2000);
    } else if (field === 'name') {
      setCopiedName(true);
      setTimeout(() => {
        setCopiedName(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Title>
        {language === 'en'
          ? 'Your profile'
          : language === 'ru'
          ? 'Ваш профиль'
          : 'Ваш профіль'}
      </Title>
      <ul>
        <Li>
          <Subtitle>
            {language === 'en'
              ? 'Your ID'
              : language === 'ru'
              ? 'Ваш ID'
              : 'Ваш ID'}
          </Subtitle>
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
                  {language === 'en'
                    ? 'Copied'
                    : language === 'ru'
                    ? 'Скопировано'
                    : 'Скопійовано'}
                  <span> &#x2713;</span>
                </CopiedText>
              ) : (
                userId
              )}
            </BoxInput>
          </Box>
        </Li>
        <Li>
          <Subtitle>
            {language === 'en'
              ? 'Your email'
              : language === 'ru'
              ? 'Ваша почта'
              : 'Ваша пошта'}
          </Subtitle>
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
                  {language === 'en'
                    ? 'Copied'
                    : language === 'ru'
                    ? 'Скопировано'
                    : 'Скопійовано'}
                  <span> &#x2713;</span>
                </CopiedText>
              ) : (
                userEmail
              )}
            </BoxInput>
          </Box>
        </Li>
        <Li>
          <Subtitle>
            {language === 'en'
              ? 'Your name on site'
              : language === 'ru'
              ? 'Ваше имя на сайте'
              : "Ваше Ім'я на сайті"}
          </Subtitle>
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
                  {language === 'en'
                    ? 'Copied'
                    : language === 'ru'
                    ? 'Скопировано'
                    : 'Скопійовано'}
                  <span> &#x2713;</span>
                </CopiedText>
              ) : (
                userNickName
              )}
            </BoxInput>
          </Box>
        </Li>

        <Li>
          <PhoneChange language={language} />
        </Li>
        <Li>
          <PassForm language={language} />
        </Li>
      </ul>
    </Container>
  );
};

export default Profile;
