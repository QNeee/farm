import { Formik, Form } from 'formik';
import { SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import {
  MdAppRegistration,
  MdLockOutline,
  MdOutlineMailOutline,
} from 'react-icons/md';

import {
  forgotPassword,
  login,
  register,
} from '../../redux/auth/authOperations';
import { VscSend } from 'react-icons/vsc';

import {
  Label,
  Input,
  Button,
  Error,
  WrapError,
  LabelCheck,
  WrapErrorCheck,
  FieldCheck,
  ErrorCheck,
} from './Auth.styled';
import { AppDispatch } from '../../redux/store';
import { RulesModal } from '../Modal';
import { getLanguage, getPassMsg } from '../../redux/auth/authSelectors';
import { getValidationSchema } from './authValidationSchema';
import { FaEarlybirds } from 'react-icons/fa';

interface IForm {
  email: string;
  password: string;
  toggle: boolean;
}

const AuthForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const [forgot, setForgot] = useState(false);
  const [w8, setW8] = useState(false);
  const passMsg = useSelector(getPassMsg);
  const [email, setEmail] = useState('');
  const { pathname } = useLocation();
  const language = useSelector(getLanguage);
  const initialValues: IForm = {
    email: '',
    password: '',
    toggle: false,
  };
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const passTranslate = (msg: string) => {
    let text = '';
    switch (language) {
      case 'en':
        return msg;
      case 'ru':
        text = `Мы отправили пароль на вашу почту ${msg.split(' ')[5]}`;
        break;
      default:
        text = `Ми відправили пароль на вашу почту ${msg.split(' ')[5]}`;
    }
    return text;
  };
  const onSubmit = async (
    values: IForm,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await sleep(500);
      const { email, password } = values;
      const newUser = { email, password };

      if (pathname === '/login') {
        dispatch(login(newUser));
      } else {
        dispatch(register(newUser));
      }
      resetForm();
    } catch (error) {
      console.error(
        language === 'en'
          ? 'Something Wrong!'
          : language === 'ru'
          ? 'Чтото пошло не так!'
          : 'Щось пішло не так!',
        error
      );
    }
  };
  const handleSubmit = async () => {
    if (w8) return;
    if (!email) return;
    setW8(true);
    const data = {
      email,
    };
    await dispatch(forgotPassword(data));
    setEmail('');
    setW8(false);
    setForgot(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={
        pathname === '/login'
          ? getValidationSchema(language, 'loginValidationSchema')
          : getValidationSchema(language, 'commonValidationSchema')
      }
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <WrapError hasError={!!(touched.email && errors.email)}>
            <Label htmlFor="email">
              <MdOutlineMailOutline />
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder={
                language === 'en'
                  ? 'Email'
                  : language === 'ru'
                  ? 'Почта'
                  : 'Пошта'
              }
            />
            <Error name="email" component={WrapError} />
          </WrapError>

          <WrapError hasError={!!(touched.password && errors.password)}>
            <Label htmlFor="password">
              <MdLockOutline />
            </Label>
            <Input
              placeholder={
                language === 'en'
                  ? 'Password'
                  : language === 'ru'
                  ? 'Пароль'
                  : 'Пароль'
              }
              type="password"
              id="password"
              name="password"
            />
            <Error name="password" component={WrapError} />
          </WrapError>
          {pathname === '/login' ? (
            <div>
              {!forgot ? (
                <Button onClick={() => setForgot(true)}>
                  <FaEarlybirds
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  {!passMsg
                    ? language === 'en'
                      ? 'Forgot password?'
                      : language === 'ru'
                      ? 'Забыли пароль?'
                      : 'Забули пароль?'
                    : passTranslate(passMsg)}
                </Button>
              ) : (
                <div>
                  <div style={{ position: 'relative' }}>
                    <Label htmlFor="forgotEmail">
                      <VscSend />
                    </Label>
                    <Input
                      placeholder={
                        language === 'en'
                          ? 'Enter your Email'
                          : language === 'ru'
                          ? 'Введите вашу Почту'
                          : 'Введіть вашу почту'
                      }
                      type="email"
                      id="forgotEmail"
                      value={email}
                      onChange={(e: {
                        target: { value: SetStateAction<string> };
                      }) => setEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Button type="button" onClick={handleSubmit}>
                      {language === 'en'
                        ? 'Send Password'
                        : language === 'ru'
                        ? 'Отправить Пароль'
                        : 'Відправити Пароль'}
                    </Button>
                    <Button type="button" onClick={() => setForgot(false)}>
                      {language === 'en'
                        ? 'Back'
                        : language === 'ru'
                        ? 'Назад'
                        : 'Назад'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : null}
          {pathname === '/login' ? null : (
            <WrapErrorCheck hasError={!!(touched.toggle && errors.toggle)}>
              <FieldCheck type="checkbox" id="checkbox" name="toggle" />
              <LabelCheck htmlFor="checkbox" style={{ display: 'flex' }}>
                {language === 'en'
                  ? 'I agree with'
                  : language === 'ru'
                  ? 'Согласан с'
                  : 'Погоджуюсь з'}
                <RulesModal language={language} />
              </LabelCheck>
              <ErrorCheck name="toggle" component={WrapError} />
            </WrapErrorCheck>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {pathname === '/login' ? (
              <>
                <AiOutlineLogin
                  style={{ width: 24, height: 24, marginRight: 10 }}
                />
                {language === 'en'
                  ? 'Login'
                  : language === 'ru'
                  ? 'Войти'
                  : 'Увійти'}
              </>
            ) : (
              <>
                <MdAppRegistration
                  style={{ width: 24, height: 24, marginRight: 10 }}
                />
                {language === 'en'
                  ? 'Register'
                  : language === 'ru'
                  ? 'Регистрация'
                  : 'Реєстрація'}
              </>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export { AuthForm };
