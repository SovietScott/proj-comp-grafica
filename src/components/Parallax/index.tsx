import './index.css'
import sofa from '../../assets/sofa.png';
import mandala from '../../assets/mandala.png'; 
import mask from '../../assets/theater.png'; 
import tree from '../../assets/nature.png'; 
import rat from '../../assets/rato.png'; 
import brain from '../../assets/brain.png'; 

function Parallax(): JSX.Element {
  return (
    <div className='Parallax'>
      <div className='Solver'>
        <div className='Middler'>
          <div className='Services'>
            <h2>Logos Psicologia</h2>
            <h1>Áreas de Atuação</h1>
            <ul>
              <li><span><i className="fa-solid fa-brain"></i></span><span>Psicoterapia Individual</span></li>
              <li><span><i className="fa-solid fa-house-medical"></i></span><span>Acompanhamento Terapêutico</span></li>
              <li><span><i className="fa-solid fa-person-half-dress"></i></span><span>Psicoterapia de Casal</span></li>
              <li><span><i className="fa-solid fa-hands-holding-child"></i></span><span>Autismo</span></li>
            </ul>
            <h1>Principais Temáticas Trabalhadas</h1>
            <ul>
              <li><span><i className="fa-solid fa-face-smile"></i></span><span>Autoestima</span></li>
              <li><span><i className="fa-solid fa-image-portrait"></i></span><span>Autoconhecimento</span></li>
              <li><span><i className="fa-solid fa-hands-bound"></i></span><span>Ansiedade</span></li>
              <li><span><i className="fa-solid fa-money-bill-wave"></i></span><span>Vícios</span></li>
              <li><span><i className="fa-solid fa-face-sad-tear"></i></span><span>Traumas</span></li>
              <li><span><i className="fa-solid fa-joint"></i></span><span>Dependências</span></li>
            </ul>
            <h1>Abordagens Utilizadas</h1>
            <ul className="Methods">
              <li>
                <span>Psicanálise</span>
                <img src={sofa}></img>
              </li>
              <li>
                <span>Análise do Comportamento</span>
                <img src={rat}></img>
              </li>
              <li>
                <span>TCC</span>
                <img src={brain}></img>
              </li>
              <li>
                <span>Gestalt</span>
                <img src={tree}></img>
              </li>
              <li>
                <span>Analista <br></br> Junguiana</span>
                <img src={mandala}></img>
              </li>
              <li>
                <span>Psicodrama</span>
                <img src={mask}></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parallax