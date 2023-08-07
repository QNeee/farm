import { useLocation } from 'react-router-dom';
import { MdAppRegistration } from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { HOST } from '../../host';
import { Form, StyledLink, Title } from './Auth.styled';
import { AuthForm } from './AuthForm';

const Auth = () => {
  const { pathname } = useLocation();
  return (
    <Form>
      <Title>{pathname === '/login' ? 'Увійти' : 'Реєстрація'}</Title>
      <AuthForm />
      {pathname === '/login' ? (
        <StyledLink to="/register">
          <MdAppRegistration
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          Реєстрація
        </StyledLink>
      ) : (
        <StyledLink to="/login">
          <AiOutlineLogin style={{ width: 24, height: 24, marginRight: 10 }} />
          Увійти
        </StyledLink>
      )}
      <StyledLink to={HOST + '/auth/google'} title="Google авторизація">
        <FcGoogle style={{ width: 24, height: 24, marginRight: 10 }} /> Google
        авторизація
      </StyledLink>
    </Form>
  );
};

export { Auth };
