import './index.scss'

function Footer() : JSX.Element {
  return (
    <div className='Footer'>
      <div className='Warning'>
        <h2>Em caso de crise ligue para o CVV - 188 </h2>
        <p>Em caso de emergência, procure o hospital mais próximo. Havendo risco de morte, ligue imediatamente para o SAMU - 192.</p>
      </div>
      <div className='Reference'>
        Logos Psicologia 2023 ©  | 
        TODOS OS DIREITOS RESERVADOS | 
        SITE DESENVOLVIDO POR 
        <a href='https://github.com/SovietScott'> LUCAS FERREIRA </a>
      </div>
    </div>
  )
}

export default Footer