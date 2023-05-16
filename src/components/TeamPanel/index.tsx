import './index.scss'

function TeamPanel(props : {images: string[]}): JSX.Element {
  return (
    <>
      <div className="projcard-container">

        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={props.images[0]} />
            <div className="projcard-textbox">
              <div className="projcard-title">Alana Alícia Carolina Rodrigues</div>
              <div className="projcard-subtitle">Especialista em ABA</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">Alana Alícia possui seis anos de experiência profissinal e atua principalmente com Análise do comportamento aplicada (ABA), o ABA trabalha no reforço dos comportamentos positivos e no ensino intensivo e individualizado das habilidades necessárias para que a criança autista possa adquirir independência e a melhor qualidade de vida possível.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">ABA</span>
                <span className="projcard-tag">Autismo</span>
                <span className="projcard-tag">Psicopedagogia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-red">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={props.images[1]} />
            <div className="projcard-textbox">
              <div className="projcard-title">Sérgio Anderson Noah da Mota</div>
              <div className="projcard-subtitle">Especialista em TCC</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">Sérgio Anderson possui oito anos de experiência profissional e atua utilizando a terapia cognitiva comportamental (TCC), abordagem específica para quem gostaria de trabalhar seus traumas de forma assertiva e diretiva.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">Psicologia do Esporte</span>
                <span className="projcard-tag">Psicologia Hospitalar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-green">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={props.images[2]} />
            <div className="projcard-textbox">
              <div className="projcard-title">Isis Esther Dias</div>
              <div className="projcard-subtitle">Especialista em Psicanálise</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">Isis Dias é psicanalista a dez anos. A Psicanálise, uma das abordagens mais antigas da profissão foi criada por Freud e permanece até os dias de hoje sendo uma das abordagens mais conhecidas. Por meio da análise de um psicanalista você pode tratar diversos problemas de cunho emocional.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">Psicologia Organizacional</span>
                <span className="projcard-tag">Psicologia do Trabalho</span>
                <span className="projcard-tag">Psicologia Social</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-brown">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={props.images[3]} />
            <div className="projcard-textbox">
              <div className="projcard-title">Renato Arthur Freitas</div>
              <div className="projcard-subtitle">Psiquiatra e Psicólogo</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">Renato Arthur possui doze anos de experiência, atuando tanto com a psiquiatria clínica e forense quanto com a neuropsicologia. É o nosso psiquiatra responsável por processos que envolvem o tratamento de vícios e apoio às complicações decorrentes desse.</div>
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