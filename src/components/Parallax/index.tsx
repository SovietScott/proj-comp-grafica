import './index.scss'

function Parallax(props : {List : {name : string, url : string;}[]}): JSX.Element {
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
              {props.List.map(({name, url}) => {
                return (
                  <li>
                    <span>{name}</span>
                    <img src={url}></img>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parallax