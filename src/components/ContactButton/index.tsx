import './index.scss'

function ContactButton(): JSX.Element {
  return (
    <div className='ContactButton'>
      <div className='BgButton'>
        <a href="https://api.whatsapp.com/send?phone=556183293284&text=Olá%20Psicóloga%20Letícia%20Rodrigues,%20gostaria%20de%20agendar%20um%20sessão.%20Obrigado(a)!">
          <span>Agendar Consulta</span>
          <span><i className='fab fa-whatsapp'></i></span>
        </a>
      </div>
    </div>
  )
}

export default ContactButton