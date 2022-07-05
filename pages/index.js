import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link';
import {
  EnvelopeSimple, MapPin, Phone,
} from 'phosphor-react';
import Carousel from 'react-elastic-carousel';

import {
  Card,
  CardTestimonial,
  Container,
  SectionAboult, 
  SectionSpace,
  ContainerCarousel,
  ContainerClinicalStaff,
  SectionClinicalStaff,
  SectionContact,
  SectionHome,
  SectionTestimonials,
  SectionTreatments,
} from '../styles/pagesStyles/styleHome';
import Button from '../components/Button';

import aboultImage from '../public/aboult.png';
import { spaceImages } from '../public/data/spaceImages';
import contactImage from '../public/contact.jpg';
import DividerOne from '../components/DividerOne';
import DividerTwo from '../components/DividerTwo';
import { typesOfTreatments } from '../public/data/typesOfTreatments';
import { clinicalStaff } from '../public/data/clinicalStaff';
import { testimonials } from '../public/data/testimonials';
import { breakPoints } from '../public/data/breakPoints';

export default function Home() {
  return (
    <>
      <Head>
        <title>Diana Araújo - Odontologia Humanizada</title>
        
        <meta name="description" content="Clínica Odontológica Diana Araújo. Odontologia humanizada." />
        <meta name="keywords" content="Diana Araújo, Diana araujo, Desntista, Dentista em Campos, Dentista em Campos dos Goytacazes, Odontologia, Odontologia Humanizada, Clínica Odontológica, Clínica Odontológica em Campos, Clínica Odontológica em Campos dos Goytacazes, Campos dos Goytacazes, Campos, Campos/RJ, Campos dos Goytacazes/RJ, RJ, Rio de Janeiro"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionHome id="home">
        <h1>Diana Araújo</h1>
        <p>
          Odontologia Humanizada, um conceito diferenciado no que se refere
          a cuidar de você e do seu bem estar.
        </p>
        <Button />
      </SectionHome>

      <SectionAboult id="aboult">
        <Container>
          <Image src={aboultImage} alt=" Doutora Diana Araújo realizando um procedimento em uma paciente" width={275} height={386} />
        </Container>
        <Container>
          <h2>Sobre</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse sagittis arcu quis nisi luctus,
            id accumsan felis tristique. Proin quis bibendum diam.
            Sed consequat nisl laoreet eros ultricies pellentesque.
            Nullam in est porta, pellentesque massa vitae, vehicula risus.
          </p>
          <p>
            In placerat, felis vitae sodales dictum, lacus quam pretium mi,
            ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh.
            Donec luctus, nunc finibus elementum suscipit,
            tortor augue vulputate sapien, vitae feugiat enim augue sed.
          </p>
          <p>
            Quisque id aliquam elit. Suspendisse congue pharetra maximus.
            Duis rutrum velit a leo euismod dictum. Sed sodales est
            efficitur arcu tincidunt tincidunt. Curabitur fringilla,
            risus at feugiat feugiat, nisl nulla tincidunt tellus,
            elementum elementum lorem nisl eleifend dolor.
            Nullam eget dui at sem ullamcorper luctus.
          </p>
        </Container>
      </SectionAboult>
      <DividerOne />

      <SectionTreatments id="treatments">
        <Container>
          <h2>Tratamentos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse sagittis arcu quis nisi luctus, id accumsan
            felis tristique. Proin quis bibendum diam.
          </p>
        </Container>
        {Object.entries(typesOfTreatments).map(([key, value]) => (
          <Card key={key}>
            <div>
              <Image src={value.image} alt="Clínica Geral" />
            </div>
            <div>
              <h3>{value.title}</h3>
              <p>
                {' '}
                {value.description}
                {' '}
              </p>
              <Link href={`/${key}`}>
                Saiba mais...
              </Link>
            </div>
          </Card>
        ))}

      </SectionTreatments>
      <DividerTwo />

      <SectionClinicalStaff id="clinical-staff">
        <Container>
          <h2>Corpo Clínico</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Suspendisse sagittis arcu
            quis nisi luctus, id accumsan
            felis tristique.
            Proin quis bibendum diam.
          </p>
        </Container>
        <ContainerClinicalStaff>
          {Object.entries(clinicalStaff).map(([key, value]) => (
            <div key={key}>
              <div className="image">
                <Image src={value.image} alt="Doutora Diana Araújo sorrindo" />
              </div>
              <div className="text">
                <h3>{value.identification}</h3>
                <h4>{value.specialty}</h4>
                <p>{value.cro}</p>
                <Link href={`/${key}`}>
                  <a>Saiba mais...</a>
                </Link>
              </div>
            </div>
          ))}
        </ContainerClinicalStaff>

      </SectionClinicalStaff>
      <DividerOne />

      <SectionSpace id="space">
        <Container>
          <h2>Nosso Espaço</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Suspendisse sagittis arcu
            quis nisi luctus, id accumsan
            felis tristique.
            Proin quis bibendum diam.
          </p>
        </Container>
        <ContainerCarousel>
          <Carousel breakPoints={breakPoints}>
            {Object.entries(spaceImages).map(([key, value]) => (
              <div key={key}>
                <Image src={value.image} alt={value.alt} width={300} height={400} />
              </div>
            ))}
          </Carousel>
        </ContainerCarousel>

      </SectionSpace>
      <DividerTwo />

      <SectionTestimonials id="testimonials">
        <h2>Depoimentos</h2>
        <ContainerCarousel>
          <Carousel breakPoints={breakPoints}>
            {testimonials.map((testimonial) => (
              <CardTestimonial key={testimonial.name}>
                <blockquote>
                  <p>
                    <span>&ldquo;</span>
                    {testimonial.testimonial}
                  </p>
                  <cite>
                      <Image src={testimonial.image} alt={testimonial.alt} width={32} height={32} />
                    {testimonial.name}
                  </cite>
                </blockquote>
              </CardTestimonial>
            ))}
          </Carousel>
        </ContainerCarousel>
      </SectionTestimonials>
      <DividerOne />

      <SectionContact id="contact">
        <Container>
          <Image src={contactImage} alt="Mulher sentada na cadeira e com os cotovelos apoiados na mesa está mexendo no celular. Tem uma xícara de café sobre a mesa, logo a sua frente." width={275} height={386} />
        </Container>
        <Container>
          <h2>Entre em contato com a gente!</h2>
          <p>Entre em contato, tire suas dúvidas e marque uma consulta.</p>
          <div className="contact">
            <ul>
              <li>
                <i>
                  <Phone size={28} />
                </i>
                <a
                  href="tel:+552299931164"
                  target="_blank"
                  rel="noreferrer"
                >
                  (22)9 9993-1164
                </a>
              </li>
              <li>
                <i>
                  <EnvelopeSimple size={28} />
                </i>
                <a
                  href="mailto:dianaaraujo90@hotmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  dianaaraujo90@hotmail.com
                </a>
              </li>
              <li>
                <i>
                  <MapPin size={28} />
                </i>
                <a
                  href="https://www.google.com.br/maps/place/Av.+Profa.+Carmem+Carneiro,+409+-+Jardim+Carioca,+Campos+dos+Goytacazes+-+RJ,+28080-424/@-21.7419446,-41.3246163,17z/data=!3m1!4b1!4m5!3m4!1s0xbdd4ffb5aa75a9:0x2a44206e87b844a7!8m2!3d-21.7419496!4d-41.3224276"
                  target="_blank"
                  rel="noreferrer"
                >
                  Av. Carmem Carneiro, 409
                </a>
              </li>
            </ul>
          </div>
          <Button />
        </Container>
      </SectionContact>
      <DividerTwo />
    </>
  )
}
