import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import {
  MdAppRegistration,
  MdLockOutline,
  MdOutlineMailOutline,
} from 'react-icons/md';

import { login, register } from '../../redux/auth/authOperations';

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
import { getLanguage } from '../../redux/auth/authSelectors';
import { getValidationSchema } from './authValidationSchema';

interface IForm {
  email: string;
  password: string;
  toggle: boolean;
}

const AuthForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();
  const language = useSelector(getLanguage);
  const initialValues: IForm = {
    email: '',
    password: '',
    toggle: false,
  };
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

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
      console.error(language === 'en' ? 'Something Wrong!' : language === 'ru' ? 'Чтото пошло не так!' : 'Щось пішло не так!', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={
        pathname === '/login' ? getValidationSchema(language, 'loginValidationSchema') : getValidationSchema(language, 'commonValidationSchema')
      }
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <WrapError hasError={!!(touched.email && errors.email)}>
            <Label htmlFor="email">
              <MdOutlineMailOutline />
            </Label>
            <Input type="email" id="email" name="email" placeholder={language === 'en' ? 'Email' : language === 'ru' ? 'Почта' : 'Пошта'} />
            <Error name="email" component={WrapError} />
          </WrapError>

          <WrapError hasError={!!(touched.password && errors.password)}>
            <Label htmlFor="password">
              <MdLockOutline />
            </Label>
            <Input
              placeholder={language === 'en' ? 'Password' : language === 'ru' ? 'Пароль' : 'Пароль'}
              type="password"
              id="password"
              name="password"
            />
            <Error name="password" component={WrapError} />
          </WrapError>
          {pathname === '/login' ? null : (
            <WrapErrorCheck hasError={!!(touched.toggle && errors.toggle)}>
              <FieldCheck type="checkbox" id="checkbox" name="toggle" />
              <LabelCheck htmlFor="checkbox" style={{ display: 'flex' }}>
                {language === 'en' ? 'I agree with' : language === 'ru' ? 'Согласан с' : 'Погоджуюсь з'}
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
                {language === 'en' ? 'Login' : language === 'ru' ? 'Войти' : 'Увійти'}
              </>
            ) : (
              <>
                <MdAppRegistration
                  style={{ width: 24, height: 24, marginRight: 10 }}
                />
                {language === 'en' ? 'Register' : language === 'ru' ? 'Регистрация' : 'Реєстрація'}
              </>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export { AuthForm };
