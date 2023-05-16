import { Link } from 'react-router-dom';
import './index.scss'
import logo from '../../assets/logo.png';
import React, { useRef } from 'react';

function Header(): JSX.Element {
  const size = useRef(window.innerWidth);

  const checkSize = () => {
    let breakpoint = 760;

    return size.current > breakpoint ? (
      <div className='Header'>
        <div className='Wrapper'>
          <div className='Logo'>
            <div className='LogoWrapper'>
              <img src={logo} />
            </div>
          </div>
          <div className='Elements'>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/equipe'><li>Nossa Equipe</li></Link>
              <Link to='/atuacao'><li>Áreas de Atuação</li></Link>
              <Link to='/espaco'><li>Espaço</li></Link>
              <Link to='/contato'><li>Contato</li></Link>
            </ul>
          </div>
          <div className='ButtonWrapper'>
            <div className='Button'>
              <a href="https://api.whatsapp.com/send?phone=556183293284&text=Olá%20Psicóloga%20Letícia%20Rodrigues,%20gostaria%20de%20agendar%20um%20sessão.%20Obrigado(a)!">
                <span>
                  Agendar Consulta
                </span>
                <span>
                  <i className='fab fa-whatsapp'></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className='Header'>
        <div className='WrapperMobile'>
          <div className='MainRow'>
            <div className='LogoWrapperMobile'>
              <img src={logo} />
            </div>
            <div className='ButtonWrapper'>
              <div className='Button'>
                <a href="https://api.whatsapp.com/send?phone=556183293284&text=Olá%20Psicóloga%20Letícia%20Rodrigues,%20gostaria%20de%20agendar%20um%20sessão.%20Obrigado(a)!">
                  <span>
                    Agendar Consulta
                  </span>
                  <span>
                    <i className='fab fa-whatsapp'></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='ElementsMobile'>
            <div className='ElementsRow'>
              <Link to='/'><li>Home</li></Link>
              <Link to='/equipe'><li>Nossa Equipe</li></Link>
              <Link to='/atuacao'><li>Áreas de Atuação</li></Link>
            </div>
            <div className='ElementsRow'>
              <Link to='/espaco'><li>Espaço</li></Link>
              <Link to='/contato'><li>Contato</li></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {checkSize()}
    </>
  )
}

export default Header