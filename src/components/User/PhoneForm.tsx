import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { postUserPhone } from '../../redux/auth/authOperations';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Appbar/AppBar.styled';

interface PhoneFormProps {
  initialCountryCode: string;
  initialPhoneNumber: string;
  change: boolean;
  changeFunc: Function;
}

const PhoneForm: React.FC<PhoneFormProps> = ({
  initialCountryCode,
  initialPhoneNumber,
  change,
  changeFunc,
}) => {
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const dispatch: AppDispatch = useDispatch();

  const handleCountryCodeChange = (value: string) => {
    setCountryCode(value);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phoneNumber) return;
    const phone = countryCode + phoneNumber;
    const objToRequest = {
      phone: parseInt(phone),
    };
    await dispatch(postUserPhone(objToRequest));
    changeFunc(false);
    setPhoneNumber(initialPhoneNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <PhoneInput
          country={'ua'}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onlyCountries={['ua']}
          masks={{ ua: '(...) ...-..-..' }}
          areaCodes={{ ua: ['380'] }}
          localization={{ Ukraine: 'Україна' }}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: false,
            style: { width: '100%' },
          }}
        />
      </div>
      <Button style={{ width: '100%' }} type="submit">
        {change ? 'Змінити' : 'Встановити'}
      </Button>
      {change && (
        <Button onClick={() => changeFunc(false)} type="button">
          назад
        </Button>
      )}
    </form>
  );
};

export default PhoneForm;
