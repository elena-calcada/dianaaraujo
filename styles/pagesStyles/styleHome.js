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
    max-width: 20rem;
    margin-bottom: 1.5rem;
  }

  @media(min-width: 541px) and (max-width: 767px) {

    padding: 18rem 4rem;

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

    padding: 18rem 6rem;

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

    padding: 18rem 6rem;

    h1 {
      font: 700 4rem ${({ theme }) => theme.font.titleFont};;
    }

    p {
      font: 400 1.2rem ${({ theme }) => theme.font.textFont};
      max-width: 26rem;
    }
  }

  @media(min-width: 1200px) and (max-width: 1440px) {
    background-image: url(${backgroundDesktop.src});

    padding: 15rem 8rem;

    h1 {
      font: 700 4.5rem ${({ theme }) => theme.font.titleFont};;
    }

    p {
      font: 400 1.25rem ${({ theme }) => theme.font.textFont};
      max-width: 28rem;
    }
  }

  @media(min-width: 1441px){
    background-image: url(${backgroundDesktop.src});

    padding: 21rem 10rem;

    h1 {
      font: 700 6rem ${({ theme }) => theme.font.titleFont};;
    }

    p {
      font: 400 1.5rem ${({ theme }) => theme.font.textFont};
      max-width: 36rem;
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

  @media(min-width: 541px) and (max-width: 767px) {
    padding: 5rem 4rem;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 5rem 6rem;

      img {
      width: 350px;
      height: 480.09px;
    }
  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    grid-auto-flow: column;
    padding: 10rem 6rem;

    .text {
      max-width: 40vw;
    }

    img {
      width: 400px;
      height: 548.67px;
    }
    
  }

  @media(min-width: 1200px) and (max-width: 1440px) {
    grid-auto-flow: column;
    padding: 10rem 8rem;

    .text {
      max-width: 40vw;
    }

    img {
      width: 460px;
      height: 633px;
    }
  }

  @media(min-width: 1441px) {
    grid-auto-flow: column;
    padding: 10rem 15rem;

    .text {
      max-width: 40vw;
    }

    img {
      width: 460px;
      height: 633px;
    }
  }
`;

export const SectionSpace = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;

  @media(min-width: 541px) and (max-width: 767px) {
    padding: 5rem 4rem;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 5rem 8rem;
    text-align: center;

  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    padding: 10rem 6rem;
    text-align: center;

    .text {
      max-width: 500px;
      margin: auto;
    }
  }

  @media(min-width: 1200px) and (max-width: 1440px) {
    padding: 10rem 2rem;
    text-align: center;
  
    .text {
      max-width: 500px;
      margin: auto;
    }
  }
  
  @media(min-width: 1441px) and (max-width: 1630px) {
    padding: 10rem 10rem;
    text-align: center;
    .text {
      max-width: 500px;
      margin: auto;
    }
  }

  @media(min-width: 1631px) {
    padding: 10rem 15rem;
    text-align: center;
    
    .text {
      max-width: 500px;
      margin: auto;
    }
  }
`;

export const SectionTreatments = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;
  display: grid;
  gap: 3.75rem;

  .cards {
      display: grid;
      gap: 2rem;
  }

  @media(min-width: 541px) and (max-width: 767px) {
    padding: 5rem 4rem;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 5rem 6rem;
    text-align: center;

    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    padding: 10rem 6rem;
    text-align: center;
    
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media(min-width: 1200px) and (max-width: 1440px) {
    padding: 10rem 8rem;

    .text {
      text-align: center;
    }

    .cards {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 1441px) {
    padding: 10rem 15rem;

    .text {
      text-align: center;
    }

    .cards {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;
    }

    
  }
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 2.5rem 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.primaryColor};
  margin: auto;
  border-radius: 0.25rem 0.25rem 0 0;
  max-width: 327px;

  height: 450px;
  display: grid;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    max-width: 16.5rem;

    h3 {
      font: 700 1.5rem ${({ theme }) => theme.font.titleFont};
      color: ${({ theme }) => theme.colors.titleColor};
      margin: 0.75rem 0;
    }

    p {
        line-height: initial;
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
  display: grid;
  gap: 3.75rem;

  .image {
    text-align: center;
  }

  .identification {
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

  @media(min-width: 541px) and (max-width: 767px) {
    padding: 5rem 4rem;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 5rem 6rem;
    text-align: center;
  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    padding: 10rem 6rem;
    text-align: center;
  }

  @media(min-width: 1200px) and (max-width: 1440px) {
    padding: 10rem 8rem;

    .text {
      text-align: center;

      p {
        max-width: 500px;
      }
    }
  }

  @media(min-width: 1200px) {
    padding: 10rem 15rem;

    .text {
      text-align: center;

      p {
        max-width: 500px;
      }
    }
  }
`;

export const ContainerClinicalStaff = styled.div`
  display: grid;
  gap: 2.5rem;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ContainerCarousel = styled.div`
  margin: auto;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1150px;

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

  @media(min-width: 1024px) {
    
    .rec.rec-arrow {
      display: block;
      background : #DCDCDC;

      &:hover {
        background: #4D4D4D;
        color: #ffffff;
      }

      &:disabled {
        background: #F9F9F9;
        color: #999999;
      }
    }
    .rec-carousel {
      width: 80%;
    }
  }
`;

export const SectionTestimonials = styled.section`
  padding: 5rem 1.5rem;
  text-align: left;
  background: #ffffff;

  @media(min-width: 541px) and (max-width: 767px) {
    padding: 5rem 4rem;
    
    h2 {
      text-align: center;
    }
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 5rem 8rem;
    text-align: center;
  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    padding: 10rem 6rem;
    text-align: center;
  }

  @media(min-width: 1200px) and (max-width: 1440px) {
    padding: 10rem 2rem;
    
    h2 {
      text-align: center;
    }
  }

  @media(min-width: 1441px) and (max-width: 1630px) {
    padding: 10rem 6rem;
    
    h2 {
      text-align: center;
    }
  }

  @media(min-width: 1631px) {
    padding: 10rem 16rem;
    
    h2 {
      text-align: center;
    }
  }
`;

export const CardTestimonial = styled.div`
  padding: 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  max-width: 325px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  
  height: 300px;
  display: grid;
  align-items: center;

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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.backgroundColor};

  img {
    width: 275px;
    height: 386px;
  }

  .list {
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
      color: ${({ theme }) => theme.colors.textColor};
    }

    a:hover {
      color: ${({ theme }) => theme.colors.secondColor};
    }

    i {
      color: ${({ theme }) => theme.colors.primaryColor};
    }

  }

  @media(min-width: 541px) and (max-width: 767px) {
    padding: 5rem 4rem;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 5rem 6rem;
    flex-direction: row-reverse;
    align-items: center;
  }

  @media(min-width: 1024px) and (max-width: 1199px) {
    padding: 10rem 6rem;
    flex-direction: row-reverse;
    align-items: center;

    img {
      width: 320px;
      height: 448.62px;
    }
  }

  @media(min-width: 1200px) and (max-width: 1440px) {
    flex-direction: row-reverse;
    align-items: center;
    padding: 10rem 8rem;

    img {
      width: 388px;
      height: 544px;
    }

    .text {
      max-width: 340px;
    }
  }  

  @media(min-width: 1441px) {
    flex-direction: row-reverse;
    align-items: center;
    padding: 10rem 15rem;

    img {
      width: 388px;
      height: 544px;
    }

    .text {
      max-width: 340px;
    }
  }
`;