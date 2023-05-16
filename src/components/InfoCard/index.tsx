import './index.css'

function InfoCard(props : {images : string[]}): JSX.Element {
  return (
    <div className='TestRow'>
      <figure className="snip1157">
        <blockquote>Tem me ajudado muito! É uma clínica que possui profissionais atenciosos e pontuais, estou gostando da experiência e do tratamento. Eu recomendo para qualquer pessoa que precise de uma terapia com excelência.
          <div className="arrow"></div>
        </blockquote>
        <img src={props.images[0]}/>
        <div className="author">
          <h5>Nicolas Lima Correia</h5>
        </div>
      </figure>
      <figure className="snip1157">
        <blockquote>Percebi como me aperfeiçoei para lidar com os problemas e as demandas do dia-a-dia. Claro, é desconfortável confrontar-se e sair do “modo fuga” para alçar vôos mais altos, mas é algo absolutamente necessário.
Nesse processo todo não estaria tendo tanto êxito se não fosse com a ajuda da Logos Psicologia. A ela e todos os seus funcionários meus sinceros agradecimentos!
          <div className="arrow"></div>
        </blockquote>
        <img src={props.images[1]}/>
        <div className="author">
          <h5>Nicole Araujo Barros</h5>
        </div>
      </figure>
      <figure className="snip1157">
        <blockquote>Eu particularmente acho que o trabalho feito por nós é muito bom e prático, detém de uma abordagem interessante e eficaz, e que sempre instiga a própria reflexão para entender as situações que são trazidas para serem trabalhadas. Avalio como um ótimo trabalho e muito benéfico.
          <div className="arrow"></div>
        </blockquote>
        <img src={props.images[2]}/>
        <div className="author">
          <h5>Renato Arthur Freitas<span> Psiquiatra e Psicólogo</span></h5>
        </div>
      </figure>
      <figure className="snip1157">
        <blockquote>Sou muito grata por poder contar com um profissional tão competente como psicóloga Alana Alícia. Obrigada por ter ajudado a me conhecer melhor. A cada sessão tenho reencontrado e aprendido a administrar meus sentimentos e emoções como: mulher, esposa, filha, mãe e cristã.

Recomendo a todos, procure fazer terapia. A terapia é uma das chaves para libertação da alma, da mente e do corpo.
          <div className="arrow"></div>
        </blockquote>
        <img src={props.images[3]}/>
        <div className="author">
          <h5>Leila Santos Dias</h5>
        </div>
      </figure>
    </div>
  )
}

export default InfoCard