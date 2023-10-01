import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
  modal: boolean;
}

export const GlobalStyle = createGlobalStyle<ThemeProps>`
  body {
    overflow: ${({ modal }) => (modal ? 'hidden' : 'auto')};
  }
`;
