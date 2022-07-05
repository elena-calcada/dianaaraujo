import styled from 'styled-components';

export const Container = styled.a`
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  padding: 0 2rem;
  border-radius: 2rem;
  font-size: 1rem;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverButton};
  }

  i {
    font-size: 0;
    margin-right: 0.5rem;
  }

  @media(min-width: 541px) {
    height: 3.75rem;
    padding: 0 2.25rem;
    font-size: 1.2rem;
  }
`;