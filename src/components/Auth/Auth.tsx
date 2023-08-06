import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { AppDispatch } from '../../redux/store';
import { Title, Form, Label, Input, Button, StyledLink } from './Auth.styled';
import { login, register } from '../../redux/auth/authOperations';
import { HOST } from '../../host';
import { FcGoogle } from 'react-icons/fc';
import {
  MdAppRegistration,
  MdLockOutline,
  MdOutlineMailOutline,
} from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';
interface IForm {
  email: string;
  password: string;
}
export const Auth = () => {
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();
  const [form, setForm] = useState<IForm>({ email: '', password: '' });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      email: form.email,
      password: form.password,
    };
    pathname === '/login'
      ? dispatch(login(newUser))
      : dispatch(register(newUser));
    setForm({ email: '', password: '' });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Title>{pathname === '/login' ? 'Увійти' : 'Реєстрація'}</Title>
        <Label>
          <MdOutlineMailOutline
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Input
            type="email"
            value={form.email}
            name="email"
            onChange={inputHandler}
            placeholder="Email"
          />
        </Label>
        <Label>
          <MdLockOutline style={{ width: 24, height: 24, marginRight: 10 }} />
          <Input
            placeholder="Пароль"
            type="password"
            value={form.password}
            name="password"
            onChange={inputHandler}
          />
        </Label>
        <Button type="submit">
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
        {pathname === '/login' ? (
          <StyledLink to="/register">
            <MdAppRegistration
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            Реєстрація
          </StyledLink>
        ) : (
          <StyledLink to="/login">
            <AiOutlineLogin
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            Увійти
          </StyledLink>
        )}
        <StyledLink to={HOST + '/auth/google'} title="Google авторизація">
          <FcGoogle style={{ width: 24, height: 24, marginRight: 10 }} /> Google
          авторизація
        </StyledLink>
      </Form>
    </>
  );
};
