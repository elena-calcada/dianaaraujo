import styled from 'styled-components';
import backgroundMobile from '../../public/home-mobile.png';
import backgroundTablet from '../../public/home-tablet.png';
import backgroundDesktop from '../../public/home-desktop.png';

export const SectionHome = styled.section`
  overflow: hidden;
  padding: 18rem 1.5rem;
  margin: 0;
  text-align: left;

  background-image: url(${backgroundMobile.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    font: 700 2.5rem ${({ theme }) => theme.font.titleFont};
    color: ${({ theme }) => theme.colors.titleColor};
    margin-bottom: 1rem;
  }

  p {
    max-width: 15rem;
    margin-bottom: 1.5rem;
  }

  @media(min-width: 541px) and (max-width: 767px) {

    padding: 18rem 2.5rem;

    h1 {
      font: 700 3.5rem ${({ theme }) => theme.font.titleFont};
    }

    p {
      font: 400 1.2rem ${({ theme }) => theme.font.textFont};
      max-width: 25rem;
    }
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    background-image: url(${backgroundTablet.src});

    padding: 18rem 4rem;

    h1 {
      font: 700 3.5rem ${({ theme }) => theme.font.titleFont};;
    }

    p {
      font: 400 1.2rem ${({ theme }) => theme.font.textFont};
      max-width: 25rem;
    }
  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    background-image: url(${backgroundDesktop.src});

    padding: 18rem 8rem;

    h1 {
      font: 700 3.5rem ${({ theme }) => theme.font.titleFont};;
    }

    p {
      font: 400 1.2rem ${({ theme }) => theme.font.textFont};
      max-width: 25rem;
    }
  }

  @media(min-width: 1200px) {
    background-image: url(${backgroundDesktop.src});

    padding: 18rem 8rem;

    h1 {
      font: 700 4.5rem ${({ theme }) => theme.font.titleFont};;
    }

    p {
      font: 400 1.5rem ${({ theme }) => theme.font.textFont};
      max-width: 25rem;
    }
  }
`;

export const Container = styled.div`
  margin: auto;
`;

export const SectionAboult = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;
  display: grid;
  gap: 2rem;
  background: #ffffff;
`;

export const SectionSpace = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;
`;

export const SectionTreatments = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;
  display: grid;
  gap: 2rem;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 2.5rem 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.primaryColor};
  margin: auto;
  border-radius: 0.25rem 0.25rem 0 0;

  div {
    text-align: center;
    max-width: 16.5rem;

    h3 {
      font: 700 1.5rem ${({ theme }) => theme.font.titleFont};
      color: ${({ theme }) => theme.colors.titleColor};
      margin: 0.75rem 0;
    }

    a {
      text-decoration: none;
      font: 400 ${({ theme }) => theme.fontSize.textSize} ${({ theme }) => theme.font.textFont};
      color: ${({ theme }) => theme.colors.secondColor};

      &:hover {
        font-weight: 700;
      }
    }
  }
`;

export const SectionClinicalStaff = styled.section`
  text-align: left;
  padding: 5rem 1.5rem;
  background: #ffffff;

  .image {
    text-align: center;
  }

  .text {
    margin-top: 0.3125rem;
    text-align: center;

    h3 {
      font: 700 1.375rem ${({ theme }) => theme.font.textFont};
      color: ${({ theme }) => theme.colors.titleColor};
      margin-bottom: 0;
    }

    h4 {
      font: 400 1.25rem ${({ theme }) => theme.font.textFont};
      color: ${({ theme }) => theme.colors.textColor};
    }

    p {
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      font: 400 1rem ${({ theme }) => theme.font.textFont};
      color: ${({ theme }) => theme.colors.secondColor};

      &:hover {
        font-weight: 700;
      }
    }
  }
`;

export const ContainerClinicalStaff = styled.div`
  margin-top: 2.5rem;
  display: grid;
  gap: 2.5rem;
`;

export const ContainerCarousel = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .rec.rec-arrow {
    display: none;
  }

  .rec-dot:disabled {
    background-color: transparent;
    box-shadow: none;
  }

  .rec-dot:hover {
    box-shadow: 0 0 1px 3px rgba(77, 77, 77, 0.5);
  }

  .rec-dot_active, .rec-dot:focus {
    background-color: rgb(77, 77, 77);
    box-shadow: 0 0 1px 3px rgba(77, 77, 77, 1);
  }
`;

export const SectionTestimonials = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;
  background: #ffffff;

  h2 {
    margin-bottom: 3rem;
  }
`;

export const CardTestimonial = styled.div`
  padding: 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  max-width: 325px;
  background: ${({ theme }) => theme.colors.backgroundColor};

  p {
    position: relative;
    text-indent: 1.875rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.titleColor};
  }

  span {
    font: 700 2.75rem serif;
    color: ${({ theme }) => theme.colors.primaryColor};
    position: absolute;
    left: -1.875rem;
    top: -0.65rem;
  }

  cite {
    display: flex;
    align-items: center;
    font-style: normal;
    color: ${({ theme }) => theme.colors.textColor};
  }

  img {
      width: 2rem;
      height: 2rem;
      object-fit: cover;
      clip-path: circle();
      margin-right: 0.5rem;
    }
`;

export const SectionContact = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;
  display: grid;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.backgroundColor};

  .contact {
    margin: 2.5rem 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    li + li {
      margin-top: 0.8rem;
    }

    a {
      /* text-decoration: none; */
      color: ${({ theme }) => theme.colors.textColor};
    }

    a:hover {
      color: ${({ theme }) => theme.colors.secondColor};
    }

    i {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;