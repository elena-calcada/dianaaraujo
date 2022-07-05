import styled from 'styled-components';

export const SectionFooter = styled.footer`

  background: ${({ theme }) => theme.colors.bacgroundColorFooter};

  .credits {
    padding: 0.5rem 0;
    background: ${({ theme }) => theme.colors.primaryColor};

    p {
      color: #ffffff;
      margin: 0;
    }
  }
`;

export const Container = styled.div`
  margin: auto;
  padding: 5rem 1.5rem;

  h3 {
        font: 700 1.125rem ${({ theme }) => theme.font.titleFont};
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 1rem;
      }

  .navigation {
    margin-bottom: 2.25rem;

    li {
      list-style: none;

      a {
        text-decoration: none;
        font: 400 ${({ theme }) => theme.fontSize.textSize} ${({ theme }) => theme.font.textFont};
        color: ${({ theme }) => theme.colors.textColor};

        :hover {
          color: ${({ theme }) => theme.colors.secondColor};
        }
      }
    }

    li+li {
      margin-top: 0.75rem;
    }
  }

  .localization {
    margin-bottom: 2.25rem;

    p {
      max-width: 290px;
      margin: auto;
    }

    p+p {
      margin-top: 0.3rem;
    }
  }

  .container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.25rem;
    }

  .attendance {
    margin-bottom: 2.25rem;
  }

  .social-media {
    margin-bottom: 2.25rem;
    a {
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
`;