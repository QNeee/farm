import { Background, StyledSvg, StyledText } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <>
      <Background>
        <StyledSvg>
          <StyledText x="50%" y="50%" dy=".35em" textAnchor="middle">
            404 ERROR
          </StyledText>
        </StyledSvg>
        {/* <h2>Такої сторінки не існує</h2> */}
      </Background>
    </>
  );
};

export default NotFoundPage;
