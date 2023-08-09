import { Copyright, Wrapper } from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <Copyright>&copy; {currentYear} Farm. Всі права захищені.</Copyright>
    </Wrapper>
  );
};

export { Footer };
