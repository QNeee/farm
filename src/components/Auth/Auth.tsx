import { useLocation } from 'react-router-dom';
import { MdAppRegistration } from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { HOST } from '../../host';
import { Form, StyledLink, Title } from './Auth.styled';
import { AuthForm } from './AuthForm';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/auth/authSelectors';

const Auth = () => {
  const { pathname } = useLocation();
  const language = useSelector(getLanguage);

  return (
    <Form>
      <Title>{pathname === '/login' ? language === 'en' ? 'Login' : language === 'ru' ? 'Войти' : 'Увійти' : language === 'en' ? 'Register' : language === 'ru' ? 'Регистрация' : 'Регістрація'}</Title>
      <AuthForm />
      {pathname === '/login' ? (
        <StyledLink to="/register">
          <MdAppRegistration
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          {language === 'en' ? 'Register' : language === 'ru' ? 'Регистрация' : 'Реєстрація'}
        </StyledLink>
      ) : (
        <StyledLink to="/login">
          <AiOutlineLogin style={{ width: 24, height: 24, marginRight: 10 }} />
          {language === 'en' ? 'Login' : language === 'ru' ? 'Войти' : 'Увійти'}
        </StyledLink>
      )}
      <StyledLink to={HOST + '/auth/google'} title="Google авторизація">
        <FcGoogle style={{ width: 24, height: 24, marginRight: 10 }} />
        {language === 'en' ? 'Google authorization' : language === 'ru' ? 'Google регистрация' : 'Google реєстрація'}
      </StyledLink>
    </Form>
  );
};

export { Auth };
