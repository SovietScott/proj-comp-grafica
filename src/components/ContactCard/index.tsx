import './index.css'

function ContactCard(): JSX.Element {
  return (
    <div className='MasterWrapper'>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Endereço</div>
              <div className="text-one">73011-140</div>
              <div className="text-two">Quadra 15 AR 02</div>
              <div className="text-two">Sobradinho</div>
              <div className="text-two">Brasília - DF</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Telefones</div>
              <div className="text-one">+99 99 999999999</div>
              <div className="text-two">+99 99 999999999</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Emails</div>
              <div className="text-one">logos.psico@gmail.com</div>
              <div className="text-two">logos.admin@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Nos mande uma mensagem</div>
            <p>Em caso de quaisquer dúvidas ou necessidade de contato, nossos atendentes estão sempre a postos</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Digite seu nome"/>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Digite seu email"/>
              </div>
              <div className="input-box message-box">
                <input type='textarea' placeholder='Digite sua mensagem'/>
              </div>
              <div className="button">
                <input type="button" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard