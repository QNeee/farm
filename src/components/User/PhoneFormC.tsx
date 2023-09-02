import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';

import { ReactComponent as FlagUa } from '../../images/ua.svg';
import { postUserPhone } from '../../redux/auth/authOperations';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Appbar/AppBar.styled';
import { getValidationSchema } from '../Auth/authValidationSchema';

import { FormPhone, BoxIcon, Input } from './Profile.styled';

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
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async () => {
    const mask = phoneNumber.split('(')[1].split(')')[0];
    const number = phoneNumber.split('(')[1].split(')')[1].trim().split('-');
    const objToRequest = {
      phone: mask + number[0] + number[1] + number[2]
    };
    await dispatch(postUserPhone(objToRequest));
    changeFunc(false);
    setPhoneNumber(initialPhoneNumber);
  };

  const validationSchema = getValidationSchema(
    language,
    'phoneValidationSchema'
  );

  const handlePhoneNumberChange = (event: { target: { value: string } }) => {

    const inputValue = formatPhoneNumber(event.target.value);
    setPhoneNumber(inputValue);

  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (!/^\d+$/.test(cleanedPhoneNumber)) {
      return cleanedPhoneNumber;
    }
    const match = cleanedPhoneNumber.match(
      /^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/
    );
    if (match) {
      const formattedPhoneNumber = `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
      return formattedPhoneNumber.trim();
    }
    return cleanedPhoneNumber;
  };

  return (
    <>
      <Formik
        initialValues={{ phone: phoneNumber }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps: FormikProps<{ phone: string }>) => (
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
                  placeholder="(055) 555 55 55"
                  // onChange={formikProps.handleChange}
                  onChange={handlePhoneNumberChange}
                  onBlur={formikProps.handleBlur}
                  // value={formikProps.values.phone}
                  value={phoneNumber}
                  maxLength={15}
                />
              </div>
              <ErrorMessage name="phone" component="div" />
            </div>
            <Button
              style={{ width: '100%', margin: '18px 0' }}
              type="submit"
              disabled={!formikProps.isValid || formikProps.isSubmitting}
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
