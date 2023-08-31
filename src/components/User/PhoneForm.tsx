import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { postUserPhone } from '../../redux/auth/authOperations';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Appbar/AppBar.styled';
import { getValidationSchema } from '../Auth/authValidationSchema';
import { Error } from './PassForm.styled';

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

  const handleSubmit = async (values: any) => {
    const { phone } = values;
    const objToRequest = {
      phone: parseInt(phone),
    };
    await dispatch(postUserPhone(objToRequest));
    changeFunc(false);
    setPhoneNumber(initialPhoneNumber);
  };

  const validationSchema = getValidationSchema(
    language,
    'phoneValidationSchema'
  );

  return (
    <Formik
      initialValues={{ phone: phoneNumber }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="phone">
          {({ field, form }: { field: any; form: any }) => (
            <div>
              <PhoneInput
                {...field}
                placeholder="+380 (XX) XXX-XX-XX"
                country={'ua'}
                masks={{ ua: '(..) ...-..-..' }}
                disableDropdown={true}
                enableLongNumbers={12}
                countryCodeEditable={false}
                inputProps={{
                  required: true,
                  autoFocus: false,
                  style: {
                    width: '100%',
                    padding: '20px 0px 20px 45px',
                    fontSize: 16,
                    fontFamily: 'Roboto Mono Variable',
                  },
                }}
                onChange={(value) => {
                  form.setFieldValue('phone', value);
                  handlePhoneNumberChange(value);
                }}
              />
              <ErrorMessage name="phone" component="div" />
            </div>
          )}
        </Field>
        <Button style={{ width: '100%', margin: '18px 0' }} type="submit">
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
      </Form>
    </Formik>
  );
};

export default PhoneForm;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// import { postUserPhone } from '../../redux/auth/authOperations';
// import { AppDispatch } from '../../redux/store';
// import { Button } from '../Appbar/AppBar.styled';
// import { Form, Formik } from 'formik';

// interface PhoneFormProps {
//   initialPhoneNumber: string;
//   change: boolean;
//   changeFunc: Function;
//   language: string;
// }

// const PhoneForm: React.FC<PhoneFormProps> = ({
//   initialPhoneNumber,
//   change,
//   changeFunc,
//   language,
// }) => {
//   const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
//   const dispatch: AppDispatch = useDispatch();

//   const handlePhoneNumberChange = (value: string) => {
//     setPhoneNumber(value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!phoneNumber) return;
//     const phone = phoneNumber;
//     const objToRequest = {
//       phone: parseInt(phone),
//     };
//     await dispatch(postUserPhone(objToRequest));
//     changeFunc(false);
//     setPhoneNumber(initialPhoneNumber);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 style={{ margin: '40px 0 20px' }}>
//         {language === 'en'
//           ? 'Your phone number'
//           : language === 'ru'
//           ? 'Ваш номер телефона'
//           : 'Ваш номер Телефону'}
//       </h2>
//       <div style={{ display: 'flex', margin: '8px 0 18px' }}>
//         <PhoneInput
//           placeholder="+380 (XX) XXX-XX-XX"
//           country={'ua'}
//           value={phoneNumber}
//           onChange={handlePhoneNumberChange}
//           masks={{ ua: '(..) ...-..-..' }}
//           disableDropdown={true}
//           enableLongNumbers={12}
//           countryCodeEditable={false}
//           isValid={(value) => {
//             if (value.match(/^\d{12}$/)) {
//               return true;
//             } else {
//               return 'Не вірний номер: ' + value;
//             }
//           }}
//           inputProps={{
//             name: 'phone',
//             required: true,
//             autoFocus: false,

//             style: {
//               width: '100%',
//               padding: '20px 0 20px 45px',
//               fontSize: 16,
//               fontFamily: 'Roboto Mono Variable',
//             },
//           }}
//         />
//       </div>
//       <Button style={{ width: '100%', marginBottom: 18 }} type="submit">
//         {change
//           ? language === 'en'
//             ? 'Change'
//             : language === 'ru'
//             ? 'Сменить'
//             : 'Змінити'
//           : language === 'en'
//           ? 'Install'
//           : language === 'ru'
//           ? 'Установить'
//           : 'Встановити'}
//       </Button>
//       {change && (
//         <Button
//           style={{ width: '100%', marginBottom: 18 }}
//           onClick={() => changeFunc(false)}
//           type="button"
//         >
//           {language === 'en' ? 'Back' : language === 'ru' ? 'Назад' : 'Назад'}
//         </Button>
//       )}
//     </form>
//   );
// };

// export default PhoneForm;
