import { useState } from 'react';
import { useSelector } from 'react-redux';

import { handleCopyToClipboard } from './clipboardHelper';
import PhoneChange from './PhoneChange';
import PassForm from './PassForm';
import {
  getLanguage,
  getUserEmail,
  getUserId,
} from '../../redux/auth/authSelectors';
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
  const language = useSelector(getLanguage);
  const userEmail = useSelector(getUserEmail);
  const userNickName = userEmail?.split('@')[0];
  const [copiedField, setCopiedField] = useState('');

  const copyOnClick = (text: string, field: string): void => {
    handleCopyToClipboard(text);
    setCopiedField(field);

    setTimeout(() => {
      setCopiedField('');
    }, 2000);
  };

  const onClickId = () =>
    userId !== null && copyOnClick(userId.toString(), 'id');
  const onClickEmail = () =>
    userEmail !== null && copyOnClick(userEmail.toString(), 'email');
  const onClickName = () =>
    userNickName !== null && copyOnClick(userNickName.toString(), 'name');

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
            <BoxIcon onClick={onClickId}>
              <IconId />
            </BoxIcon>
            <BoxInput>
              {copiedField === 'id' ? (
                <CopiedText>
                  {language === 'en'
                    ? 'Id copied!'
                    : language === 'ru'
                    ? 'Id скопирован!'
                    : 'Id скопійовано!'}
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
            <BoxIcon onClick={onClickEmail}>
              <IconEmail />
            </BoxIcon>
            <BoxInput>
              {copiedField === 'email' ? (
                <CopiedText>
                  {language === 'en'
                    ? 'Email copied!'
                    : language === 'ru'
                    ? 'Email скопирован!'
                    : 'Email скопійовано!'}
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
            <BoxIcon onClick={onClickName}>
              <IconName />
            </BoxIcon>
            <BoxInput>
              {copiedField === 'name' ? (
                <CopiedText>
                  {language === 'en'
                    ? 'Name copied!'
                    : language === 'ru'
                    ? 'Имя скопировано!'
                    : "Ім'я скопійовано!"}
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
