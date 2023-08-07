import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import {
  MdAppRegistration,
  MdLockOutline,
  MdOutlineMailOutline,
} from 'react-icons/md';

import { login, register } from '../../redux/auth/authOperations';
import {
  commonValidationSchema,
  loginValidationSchema,
} from './authValidationSchema';
import { Label, Input, Button, Error, WrapError } from './Auth.styled';
import { AppDispatch } from '../../redux/store';

interface IForm {
  email: string;
  password: string;
}

const AuthForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();

  const initialValues: IForm = {
    email: '',
    password: '',
  };

  const onSubmit = (
    values: IForm,
    { resetForm }: { resetForm: () => void }
  ) => {
    const newUser = {
      email: values.email,
      password: values.password,
    };
    pathname === '/login'
      ? dispatch(login(newUser))
      : dispatch(register(newUser));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={
        pathname === '/login' ? loginValidationSchema : commonValidationSchema
      }
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <WrapError hasError={!!(touched.email && errors.email)}>
            <Label htmlFor="email">
              <MdOutlineMailOutline />
            </Label>
            <Input type="email" id="email" name="email" placeholder="Email" />
            <Error name="email" component={WrapError} />
          </WrapError>

          <WrapError hasError={!!(touched.password && errors.password)}>
            <Label htmlFor="password">
              <MdLockOutline />
            </Label>
            <Input
              placeholder="Пароль"
              type="password"
              id="password"
              name="password"
            />
            <Error name="password" component={WrapError} />
          </WrapError>

          <Button type="submit" disabled={isSubmitting}>
            {pathname === '/login' ? (
              <>
                <AiOutlineLogin
                  style={{ width: 24, height: 24, marginRight: 10 }}
                />
                Увійти
              </>
            ) : (
              <>
                <MdAppRegistration
                  style={{ width: 24, height: 24, marginRight: 10 }}
                />
                Реєстрація
              </>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { AuthForm };
