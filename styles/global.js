import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.backgroundColor};
    text-align: center;

    h2 {
      font: 700 ${({ theme }) => theme.fontSize.titleSize} ${({ theme }) => theme.font.titleFont};
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.titleColor};
    }

    p {
      font: 400 ${({ theme }) => theme.fontSize.textSize} ${({ theme }) => theme.font.textFont};
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 26px;
    }

    img {
      border-radius: 0.25rem;
    }
  }
`;