import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { postUserPhone } from '../../redux/auth/authOperations';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Appbar/AppBar.styled';

interface PhoneFormProps {
  // initialCountryCode: string;
  initialPhoneNumber: string;
  change: boolean;
  changeFunc: Function;
}

const PhoneForm: React.FC<PhoneFormProps> = ({
  // initialCountryCode,
  initialPhoneNumber,
  change,
  changeFunc,
}) => {
  // const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const dispatch: AppDispatch = useDispatch();

  // const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setCountryCode(e.target.value);
  // };

  // const handleCountryCodeChange = (value: string) => {
  //   setCountryCode(value);
  // };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  // const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newPhoneNumber = e.target.value;
  //   setPhoneNumber(newPhoneNumber);
  // };

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
      <h2 style={{ margin: '40px 0 20px' }}>Ваш номер Телефону</h2>
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
            style: { width: '100%' },
          }}
          // countryCodeEditable={false}
          // onChangeCountry={handleCountryCodeChange}
        />
      </div>
      <Button style={{ width: '100%', marginBottom: 18 }} type="submit">
        {change ? 'Змінити' : 'Встановити'}
      </Button>
      {change && (
        <Button
          style={{ width: '100%' }}
          onClick={() => changeFunc(false)}
          type="button"
        >
          Назад
        </Button>
      )}
    </form>
  );
};

export default PhoneForm;
