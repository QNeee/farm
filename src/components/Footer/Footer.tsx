import { useSelector } from 'react-redux';
import { Copyright, Wrapper } from './Footer.styled';
import { getLanguage } from '../../redux/auth/authSelectors';

const Footer = () => {
  const language = useSelector(getLanguage);
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <Copyright>&copy; {currentYear} Farm. {language === 'en' ? 'All rights reserved' : language === 'ru' ? 'Все права защищены.' : 'Всі права захищені.'}</Copyright>
    </Wrapper>
  );
};

export { Footer };
