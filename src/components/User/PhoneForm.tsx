import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { postUserPhone } from '../../redux/auth/authOperations';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Appbar/AppBar.styled';

interface PhoneFormProps {
  initialPhoneNumber: string;
  change: boolean;
  changeFunc: Function;
  language: string;
}

const PhoneForm: React.FC<PhoneFormProps> = ({
  initialPhoneNumber,
  change,
  changeFunc,
  language,
}) => {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const dispatch: AppDispatch = useDispatch();

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phoneNumber) return;
    const phone = phoneNumber;
    const objToRequest = {
      phone: parseInt(phone),
    };
    await dispatch(postUserPhone(objToRequest));
    changeFunc(false);
    setPhoneNumber(initialPhoneNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ margin: '40px 0 20px' }}>
        {language === 'en'
          ? 'Your phone number'
          : language === 'ru'
          ? 'Ваш номер телефона'
          : 'Ваш номер Телефону'}
      </h2>
      <div style={{ display: 'flex', margin: '8px 0 18px' }}>
        <PhoneInput
          country={'ua'}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onlyCountries={['ua']}
          masks={{ ua: '(..) ...-..-..' }}
          localization={{ Ukraine: 'Україна' }}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: false,
            style: {
              width: '100%',
              padding: '20px 0 20px 45px',
              fontSize: 16,
              fontFamily: 'Roboto Mono Variable',
            },
          }}
        />
      </div>
      <Button style={{ width: '100%', marginBottom: 18 }} type="submit">
        {change
          ? language === 'en'
            ? 'Change'
            : language === 'ru'
            ? 'Сменить'
            : 'Змінити'
          : language === 'en'
          ? 'Install'
          : language === 'ru'
          ? 'Установить'
          : 'Встановити'}
      </Button>
      {change && (
        <Button
          style={{ width: '100%', marginBottom: 18 }}
          onClick={() => changeFunc(false)}
          type="button"
        >
          {language === 'en' ? 'Back' : language === 'ru' ? 'Назад' : 'Назад'}
        </Button>
      )}
    </form>
  );
};

export default PhoneForm;
