import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserPhone } from '../../redux/auth/authSelectors';
import { handleCopyToClipboard } from './clipboardHelper';
import { Button } from '../Appbar/AppBar.styled';
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

  const copyOnClick = (text: string): void => {
    handleCopyToClipboard(text);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const onClickPhone = () =>
    userPhone !== null && copyOnClick(userPhone.toString());

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
          <Subtitle>
            {language === 'en'
              ? 'Your phone number'
              : language === 'ru'
              ? 'Ваш номер Телефона'
              : 'Ваш номер Телефону'}
          </Subtitle>
          <Box>
            <BoxIcon onClick={onClickPhone}>
              <IconPhone />
            </BoxIcon>
            <BoxInput>
              {copied ? (
                <CopiedText>
                  {language === 'en'
                    ? 'Number copied!'
                    : language === 'ru'
                    ? 'Номер скопирован!'
                    : 'Номер скопійовано!'}
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
            {language === 'en'
              ? 'Change'
              : language === 'ru'
              ? 'Сменить'
              : 'Змінити'}
          </Button>
        </>
      )}
    </>
  );
};

export default PhoneChange;
