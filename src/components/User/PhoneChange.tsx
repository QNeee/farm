import { useSelector } from 'react-redux';
import { getUserPhone } from '../../redux/auth/authSelectors';
import { Button } from '../Appbar/AppBar.styled';
import { useState } from 'react';
import PhoneForm from './PhoneForm';
import {
  Box,
  BoxIcon,
  BoxInput,
  CopiedText,
  IconPhone,
  Subtitle,
} from './Profile.styled';

const PhoneChange = ({ language }: any) => {
  const userPhone = useSelector(getUserPhone);
  const [change, setChange] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      {!userPhone || change ? (
        <PhoneForm
          change={change}
          changeFunc={setChange}
          initialPhoneNumber=""
          language={language}
        />
      ) : (
        <>
          <Subtitle> {language === 'en' ? 'Your phone number' : language === 'ru' ? 'Ваш номер Телефона' : 'Ваш номер Телефону'}</Subtitle>
          <Box>
            <BoxIcon
              onClick={() =>
                userPhone !== null &&
                handleCopyToClipboard(userPhone.toString())
              }
            >
              <IconPhone />
            </BoxIcon>
            <BoxInput>
              {copied ? (
                <CopiedText>
                  {language === 'en' ? 'Copied' : language === 'ru' ? 'Скопировано' : 'Скопійовано'}
                  <span> &#x2713;</span>
                </CopiedText>
              ) : (
                userPhone
              )}
            </BoxInput>
          </Box>

          <Button
            style={{ width: '100%', margin: '18px 0' }}
            onClick={() => setChange(true)}
            type="button"
          >
            {language === 'en' ? 'Change' : language === 'ru' ? 'Сменить' : 'Змінити'}

          </Button>
        </>
      )}
    </>
  );
};

export default PhoneChange;
