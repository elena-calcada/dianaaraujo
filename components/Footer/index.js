import { FacebookLogo, InstagramLogo } from 'phosphor-react';
import { Container, SectionFooter } from './styles';
import logo from '../../public/logo.svg';
import Image from 'next/future/image';
import Link from 'next/link';
import {menuItens} from '../../public/data/menuItens';

export default function Footer() {
  return (
    <SectionFooter>
      <Container>
        <div className="navigation">
          <h3>Navegação</h3>
          <nav>
            <ul>
              {menuItens.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="localization">
          <h3>Localização</h3>
          <p>Avenida Carmem Carneiro, 409</p>
          <p>Bairro Jardim Carioca</p>
          <p>Campos dos Goytacazes / RJ</p>
          <p>Telefone: (22) 9 9993-1164</p>
        </div>
        <div className="attendance">
          <h3>Atendimento</h3>
          <div className="container">
            <div>
              <p>Seg - Sex</p>
              <p>Sáb</p>
            </div>
            <div>
              <p>8:00 - 18:00</p>
              <p>8:00 - 12:00</p>
            </div>
          </div>
        </div>
        <div className="social-media">
          <h3>Siga nossas redes</h3>
          <div className="container">
            <a
              href="https://www.facebook.com/diana.araujo.75457"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FacebookLogo size={32} />
              </i>
            </a>
            <a
              href="https://www.instagram.com/dradianaaraujo90/"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <InstagramLogo size={32} />
              </i>
            </a>
          </div>
        </div>
        <div className="brand">
          <div>
              <Link href="/">
                <a>
                  <Image src={logo} alt="Logo da clínica Diana Araújo" width={280} height={168} />
                </a>
              </Link>
          </div>
        </div>
      </Container>
      <div className="credits">
        <p>
          ©2022 Diana Araújo - Todos os direitos reservados
        </p>
      </div>
    </SectionFooter>
  );
}