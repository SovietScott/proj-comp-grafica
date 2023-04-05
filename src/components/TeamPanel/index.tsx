import './index.css'
import psico1 from '../../assets/psico1.jpg';
import psico2 from '../../assets/psico2.jpg';
import psico3 from '../../assets/psico3.jpg';
import psico4 from '../../assets/psico4.jpg';

function TeamPanel(): JSX.Element {
  return (
    <>
      <div className="projcard-container">
    
    <div className="projcard projcard-blue">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={psico1} />
        <div className="projcard-textbox">
          <div className="projcard-title">Alana Alícia Carolina Rodrigues</div>
          <div className="projcard-subtitle">Especialista em ABA</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">ABA</span>
            <span className="projcard-tag">Psicodrama</span>
            <span className="projcard-tag">Autismo</span>
            <span className="projcard-tag">Psicopedagogia</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-red">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={psico2} />
        <div className="projcard-textbox">
          <div className="projcard-title">Sérgio Anderson Noah da Mota</div>
          <div className="projcard-subtitle">Especialista em TCC</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">Psicologia do Esporte</span>
            <span className="projcard-tag">Psicologia Hospitalar</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-green">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={psico3} />
        <div className="projcard-textbox">
          <div className="projcard-title">Isis Esther Dias</div>
          <div className="projcard-subtitle">Especialista em Psicanálise e Gestalt</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">Psicologia Organizacional e do Trabalho</span>
            <span className="projcard-tag">Psicologia Social</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-brown">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={psico4} />
        <div className="projcard-textbox">
          <div className="projcard-title">Renato Arthur Freitas</div>
          <div className="projcard-subtitle">Psiquiatra e Psicólogo</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">Psiquiatria Clínica</span>
            <span className="projcard-tag">Psiquiatria Forense e Pericial</span>
            <span className="projcard-tag">Atenção Psicossocial</span>
            <span className="projcard-tag">Saúde Mental</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    </>
  )
}

export default TeamPanel