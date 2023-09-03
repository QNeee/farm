import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getGoogle, getLanguage } from '../../redux/auth/authSelectors';
import { Button } from '../Appbar/AppBar.styled';
import { useState } from 'react';
import { AppDispatch } from '../../redux/store';
import { patchUserPassword } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { Checkbox, TextField } from '@mui/material';
import { MdLockOutline } from 'react-icons/md';
import { Error, WrapError } from './PassForm.styled';
import { getValidationSchema } from '../Auth/authValidationSchema';

const FormProfile = styled(Form)`
  display: flex;
  flex-direction: column;
`;

interface Values {
  oldPass: string;
  newPass: string;
  newPassRepeat: string;
  showPassword: string;
}

const PassForm = ({ language }: any) => {
  const google = useSelector(getGoogle);
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    oldPass: false,
    newPass: false,
    newPassRepeat: false,
  });

  const initialValues: Values = {
    oldPass: '',
    newPass: '',
    newPassRepeat: '',
    showPassword: '',
  };

  const validationSchema = getValidationSchema(language, 'passChangeValidationSchema');

  const onSubmitForm = async (
    values: Values,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const { oldPass, newPass, newPassRepeat } = values;
      const objRequest = {
        oldPass,
        newPass,
        newPassRepeat,
      };
      if (newPass !== newPassRepeat)
        return Notify.failure(
          'новий пароль і новий пароль ще раз введені невірно'
        );
      if (!google) {
        if (oldPass === '' || newPass === '' || newPassRepeat === '') return;
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

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  console.log(google);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {({ values, handleChange, isSubmitting, touched, errors }) => (
        <FormProfile>
          <h2 style={{ margin: '20px 0' }}>{language === 'en' ? 'Your password' : language === 'ru' ? 'Ваш пароль' : 'Ваш пароль'}
          </h2>

          {google === 'false' || !google && (
            <>
              <label style={{ fontWeight: 500, marginBottom: 8 }}>
                {language === 'en' ? 'Your old password' : language === 'ru' ? 'Ваш старый пароль' : 'Ваш старий пароль'}
              </label>
              <WrapError hasError={!!(touched.oldPass && errors.oldPass)}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    paddingLeft: '45px',
                    // outline: '1px solid tomato',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    // margin: '10px 0',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: 5,
                  }}
                >
                  <MdLockOutline
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 14,
                      transform: 'translateY(-50%)',
                      color: 'rgba(0,0,0,0.75)',
                      width: 18,
                      height: 18,
                    }}
                  />
                  <Field
                    type={showPassword.oldPass ? 'text' : 'password'}
                    name="oldPass"
                    value={values.oldPass}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '0 5px 5px 0',
                      outline: 'none',
                      border: 'none',
                      borderLeft: '1px solid rgba(0,0,0,0.35)',
                      backgroundColor: 'white',
                    }}
                  />
                  <Checkbox
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: 5,
                      transform: 'translateY(-50%)',
                    }}
                    checked={showPassword.oldPass}
                    {...label}
                    icon={<ImEye />}
                    checkedIcon={<ImEyeBlocked />}
                    onChange={() => handleTogglePassword('oldPass')}
                  />
                </div>
                <Error name="oldPass" component={WrapError} />
              </WrapError>
            </>
          )}
          <>
            <label style={{ fontWeight: 500, marginBottom: 8 }}>
              {language === 'en' ? 'Your new password' : language === 'ru' ? 'Ваш новый пароль' : 'Ваш новий пароль'}

            </label>
            <WrapError hasError={!!(touched.newPass && errors.newPass)}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  paddingLeft: '45px',
                  // outline: '1px solid tomato',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  // margin: '10px 0',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: 5,
                }}
              >
                <MdLockOutline
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: 14,
                    transform: 'translateY(-50%)',
                    color: 'rgba(0,0,0,0.75)',
                    width: 18,
                    height: 18,
                  }}
                />
                <Field
                  type={showPassword.newPass ? 'text' : 'password'}
                  name="newPass"
                  value={values.newPass}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '0 5px 5px 0',
                    outline: 'none',
                    border: 'none',
                    borderLeft: '1px solid rgba(0,0,0,0.35)',
                    backgroundColor: 'white',
                  }}
                />
                <Checkbox
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: 5,
                    transform: 'translateY(-50%)',
                  }}
                  checked={showPassword.newPass}
                  {...label}
                  icon={<ImEye />}
                  checkedIcon={<ImEyeBlocked />}
                  onChange={() => handleTogglePassword('newPass')}
                />
              </div>
              <Error name="newPass" component={WrapError} />
            </WrapError>
          </>

          <>
            <label style={{ fontWeight: 500, marginBottom: 8 }}>
              {language === 'en' ? 'Your new password again' : language === 'ru' ? 'Ваш новый пароль опять' : 'Ваш новий пароль знову'}
            </label>

            <WrapError
              hasError={!!(touched.newPassRepeat && errors.newPassRepeat)}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  paddingLeft: '45px',
                  // outline: '1px solid tomato',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  // margin: '10px 0',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: 5,
                }}
              >
                <MdLockOutline
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: 14,
                    transform: 'translateY(-50%)',
                    color: 'rgba(0,0,0,0.75)',
                    width: 18,
                    height: 18,
                  }}
                />
                <Field
                  type={showPassword.newPassRepeat ? 'text' : 'password'}
                  name="newPassRepeat"
                  value={values.newPassRepeat}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '0 5px 5px 0',
                    outline: 'none',
                    border: 'none',
                    borderLeft: '1px solid rgba(0,0,0,0.35)',
                    backgroundColor: 'white',
                  }}
                />
                <Checkbox
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: 5,
                    transform: 'translateY(-50%)',
                  }}
                  checked={showPassword.newPassRepeat}
                  {...label}
                  icon={<ImEye />}
                  checkedIcon={<ImEyeBlocked />}
                  onChange={() => handleTogglePassword('newPassRepeat')}
                />
              </div>
              <Error name="newPassRepeat" component={WrapError} />
            </WrapError>
          </>
          <Button type="submit" disabled={isSubmitting}>
            {language === 'en' ? 'Change password' : language === 'ru' ? 'Сменить пароль' : 'Змінити пароль'}
          </Button>
        </FormProfile>
      )}
    </Formik>
  );
};

export default PassForm;
