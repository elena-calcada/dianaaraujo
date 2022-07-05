import Image from 'next/image';
import Link from 'next/link';
import { List, X } from 'phosphor-react';
import { useState } from 'react';
import logo from '../../public/logo.svg';
import {
  Container, ContainerMenu, NavWrap,
} from './styles';
import {menuItens} from '../../public/data/menuItens';

export default function Header() {

  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <>
      <Container>
        <Link href="/">
          <a>
            <Image 
              src={logo} 
              alt="Logo da Diana Araujo"
              onClick={() => setMenu(false)}
            />
          </a>
        </Link>
        <div onClick={handleClick} >
          {menu === false ? 
            <i><List size={32}/></i> : 
            <i><X size={32} />
          </i>}
        </div>
      </Container>
      
      {!menu ?
        <ContainerMenu>
          <div className='disabled'>
            <NavWrap>
              <ul>
                {menuItens.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>
                      <a >{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavWrap>
          </div>
        </ContainerMenu>
        :
        <ContainerMenu>
          <div className='active'>
            <NavWrap>
              <ul>
                {menuItens.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>
                      <a onClick={() => setMenu(false)}>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavWrap>
          </div>
        </ContainerMenu>
      }
      
    </>
  );
}