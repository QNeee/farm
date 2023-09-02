import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';

import { ReactComponent as FlagUa } from '../../images/ua.svg';
import { postUserPhone } from '../../redux/auth/authOperations';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Appbar/AppBar.styled';
import { getValidationSchema } from '../Auth/authValidationSchema';
import * as Yup from 'yup';

import { FormPhone, BoxIcon, Input } from './Profile.styled';
import { formatPhoneNumber } from './formatPhoneNumber';

interface PhoneFormProps {
  initialPhoneNumber: string;
  change: boolean;
  changeFunc: Function;
  language: string;
}

const PhoneFormC: React.FC<PhoneFormProps> = ({
  initialPhoneNumber,
  change,
  changeFunc,
  language,
}) => {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  // const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async () => {
    const objToRequest = {
      phone: formatPhoneNumber(phoneNumber),
    };
    await dispatch(postUserPhone(objToRequest));
    changeFunc(false);
    setPhoneNumber(initialPhoneNumber);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setPhoneNumber(formatPhoneNumber(value));
  };

  const validationSchema = getValidationSchema(
    language,
    'phoneValidationSchema'
  );

  return (
    <>
      <Formik
        initialValues={{ phone: phoneNumber }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, handleBlur, isSubmitting, handleChange, values }) => (
          <Form>
            <h2 style={{ margin: '40px 0 20px' }}>
              {language === 'en'
                ? 'Your phone number'
                : language === 'ru'
                ? 'Ваш номер телефона'
                : 'Ваш номер Телефону'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', height: 40 }}>
                <BoxIcon>
                  <FlagUa style={{ width: 15 }} />
                </BoxIcon>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="(055) 555-55-55"
                  onChange={handlePhoneNumberChange}
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  // value={values.phone}
                  value={phoneNumber}
                  maxLength={15}
                />
              </div>
              <ErrorMessage name="phone" component="div" />
            </div>
            <Button
              style={{ width: '100%', margin: '18px 0' }}
              type="submit"
              disabled={!isValid || isSubmitting}
            >
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
                {language === 'en'
                  ? 'Back'
                  : language === 'ru'
                  ? 'Назад'
                  : 'Назад'}
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PhoneFormC;
