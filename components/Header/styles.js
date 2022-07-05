/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #E4E4E4;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  padding: 0 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  i {
    cursor: pointer;
  }

  @media(min-width: 541px) and (max-width: 767px) {
    padding: 0 2.5rem;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 0 4rem;
  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    padding: 0 8rem;
  }

  @media(min-width: 1200px) {
    padding: 0 8rem;
  }
`;

export const ContainerMenu = styled.nav`
  .disabled {
    background: #F9F9F9;
    width: 100vw;
    height: 100vh;
    top: 71px;
    bottom: 0;
    position: fixed;
    left: -120%;
    transition: 500ms;
    z-index: 100;
  }

  .active {
    background: #F9F9F9;
    width: 100vw;
    height: 100vh;
    top: 71px;
    bottom: 0;
    position: fixed;
    left: 0;
    transition: 500ms;
    z-index: 100;
  }
`;

export const NavWrap = styled.div`
  width: 100%;
  padding: 5rem 0;
  overflow-y: scroll;
  ul {
    display: grid;
    gap: 2rem;
    
    li {
      list-style: none;

      a{
        text-decoration: none;
        font: 700 1.2rem ${({ theme }) => theme.font.titleFont};

        color: ${({ theme }) => theme.colors.primaryColor};

        :hover {
          color: ${({ theme }) => theme.colors.secondColor};

          transition: color 0.5s;
        }
      }
    }
  }
`;


