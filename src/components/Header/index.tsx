import {Link} from 'react-router-dom';
import './index.css'
import logo from '../../assets/logo.png';

function Header(): JSX.Element {
  return (
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
  )
}

export default Header