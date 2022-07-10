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
          Somos comprometidos em oferecer saúde e bem estar através da odontologia humanizada.
          Contamos com uma equipe  multidisciplinar, capacitada e experiente nas mais diversas áreas da Odontologia.
        </p>
        <Button />
      </SectionHome>
      <DividerOne />

      <SectionAboult id="aboult">
        <Container>
          <Image src={aboultImage} alt=" Doutora Diana Araújo realizando um procedimento em uma paciente" width={275} height={386} />
        </Container>
        <Container className='text'>
          <h2>Sobre</h2>
          <p>
            Olá! Sou Diana, há mais de 10 anos responsável pelo consultório odontológico Diana Araújo. Aqui, o atendimento ao paciente é feito seguindo o conceito da Odontologia Humanizada, o que representa uma tranquilizadora diferença nessa área.
          </p>
          <p>
            Essa é a hora em que você me pergunta: “Mas, Diana, o que isso significa 🤔?” 
          </p>
          <p>
            Bom, significa que o paciente é tratado com atenção, cuidado, empatia... e que o relacionamento dentista-paciente é cultivado com tempo e paciência. Em outras palavras, implica oferecer um atendimento que realmente resolve o seu problema de uma forma eficiente, inteligente e humana, reforçada por um ambiente aconchegante, acolhedor e, claro, sempre com aquele cafezinho esperto só esperando por você.
          </p>
          <p>
            “Legal!... mas por que esse tipo de atendimento é assim tão especial 🤔?”
          </p>
          <p>
            Então: a humanização transforma o atendimento odontológico em algo prazeroso, dando a você a possibilidade de superar dificuldades como, por exemplo, a odontofobia, conhecida também como medo de dentista.
          </p>
          <p>
            Huuum!… não tá acreditando em mim, né 😅?!
          </p>
          <p>
            Vamos fazer o seguinte: que tal você marcar um horário e vir até aqui, para que eu mostre como esse tipo de atendimento realmente funciona?
          </p>
          <p>
            Combinado? Aguardo você 😉!
          </p>
        </Container>
      </SectionAboult>
      <DividerTwo />

      <SectionTreatments id="treatments">
        <Container className='text'>
          <h2>Tratamentos</h2>
          <p>
            Oferecemos o melhor atendimento nos mais diversos tipos de tratamentos.
          </p>
        </Container>
        <div className='cards'>
          {Object.entries(typesOfTreatments).map(([key, value]) => (
            <Card key={key}>
              <div>
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
                  {/* <Link href={`/${key}`}>
                    Saiba mais...
                  </Link> */}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </SectionTreatments>
      <DividerOne />

      <SectionClinicalStaff id="clinical-staff">
        <Container className='text'>
          <h2>Corpo Clínico</h2>
          <p>
            Contamos com profissionais capacitados e experientes em diversas áreas da odontologia.
          </p>
        </Container>
        <ContainerClinicalStaff>
          {Object.entries(clinicalStaff).map(([key, value]) => (
            <div key={key}>
              <div className="image">
                <Image src={value.image} alt="Doutora Diana Araújo sorrindo" />
              </div>
              <div className="identification">
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
      <DividerTwo />

      <SectionSpace id="space">
        <div className='text'>
          <h2>Nosso Espaço</h2>
          <p>
            Venha conhecer o nosso espaço. Um ambiente humanizado, aconchegante e acolhedor. Aqui você se sentirá tranquilo e seguro.
          </p>
        </div>
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
      <DividerOne />

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
      <DividerTwo />

      <SectionContact id="contact">
        <Container>
          <Image src={contactImage} alt="Mulher sentada na cadeira e com os cotovelos apoiados na mesa está mexendo no celular. Tem uma xícara de café sobre a mesa, logo a sua frente." />
        </Container>
        <div>
          <div>
            <h2>Entre em contato com a gente!</h2>
            <p>Entre em contato, tire suas dúvidas e marque uma consulta.</p>
          </div>
          <div className="list">
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
        </div>
      </SectionContact>
      <DividerOne />
    </>
  )
}
