import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getGoogle } from '../../redux/auth/authSelectors';
import { Button } from '../Appbar/AppBar.styled';
import { useState } from 'react';
import { AppDispatch } from '../../redux/store';
import { patchUserPassword } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { passChangeValidationSchema } from '../Auth/authValidationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const FormProfile = styled(Form)`
  display: flex;
  flex-direction: column;
`;

interface Values {
  oldPass: string;
  newPass: string;
  newPass1: string;
  showPassword: string;
}

const PassForm = () => {
  const google = useSelector(getGoogle);
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    oldPass: false,
    newPass: false,
    newPass1: false,
  });


  const initialValues: Values = {
    oldPass: '',
    newPass: '',
    newPass1: '',
    showPassword: '',
  };

  const validationSchema = passChangeValidationSchema;

  const onSubmitForm = async (
    values: Values,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const { oldPass, newPass, newPass1 } = values;
      const objRequest = {
        oldPass,
        newPass,
        newPass1
      }
      if (newPass !== newPass1)
        return Notify.failure(
          'новий пароль і новий пароль ще раз введені невірно'
        );
      if (!google) {
        if (oldPass === '' || newPass === '' || newPass1 === '') return;
      }
      await dispatch(patchUserPassword(objRequest));
      resetForm();
    } catch (error) {
      console.error('Щось пішло не так!', error);
    }
  };

  const handleTogglePassword = (fieldName: string) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName as keyof typeof prevState],
    }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {({ values, handleChange, isSubmitting }) => (
        <FormProfile>
          <h2 style={{ margin: '20px 0' }}>Ваш пароль</h2>

          {google === 'false' && (
            <>
              <label style={{ fontWeight: 500 }}>Ваш старий пароль</label>
              <Field
                type={showPassword.oldPass ? 'text' : 'password'}
                name="oldPass"
                value={values.oldPass}
                onChange={handleChange}
                style={{ marginBottom: 10 }}
              />
              <ErrorMessage name="oldPass" component="div" />
              <label>
                <Field
                  type="checkbox"
                  checked={showPassword.oldPass}
                  onChange={() => handleTogglePassword('oldPass')}
                />
                Показать пароль
              </label>
            </>
          )}
          <>
            <label style={{ fontWeight: 500 }}>Ваш новий пароль</label>
            <Field
              type={showPassword.newPass ? 'text' : 'password'}
              name="newPass"
              value={values.newPass}
              onChange={handleChange}
              style={{ marginBottom: 10 }}
            />
            <ErrorMessage name="newPass" component="div" />
            <label>
              <Field
                type="checkbox"
                checked={showPassword.newPass}
                onChange={() => handleTogglePassword('newPass')}
              />
              Показать пароль
            </label>
          </>

          <>
            <label>Ваш новий пароль ще раз</label>

            <Field
              type={showPassword.newPass1 ? 'text' : 'password'}
              name="newPass1"
              value={values.newPass1}
              onChange={handleChange}
              style={{ marginBottom: 10 }}
            />

            <ErrorMessage name="newPass1" component="div" />

            <label>
              <Field
                type="checkbox"
                checked={showPassword.newPass1}
                onChange={() => handleTogglePassword('newPass1')}
              />
              Показать пароль
            </label>
          </>
          <Button type="submit" disabled={isSubmitting}>
            Змінити пароль
          </Button>
        </FormProfile>
      )}
    </Formik>
  );
};

export default PassForm;
