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
          masks={{ ua: '(..) ...-..-..' }}
          areaCodes={{ ua: ['38'] }}
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
      <Button style={{ width: '100%', marginBottom: 10 }} type="submit">
        {change ? 'Змінити' : 'Встановити'}
      </Button>
      {change && (
        <Button
          style={{ width: '100%' }}
          onClick={() => changeFunc(false)}
          type="button"
        >
          назад
        </Button>
      )}
    </form>
  );
};

export default PhoneForm;
