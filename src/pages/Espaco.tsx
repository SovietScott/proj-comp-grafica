import './App.scss'
import {Header, ContactButton, Footer, Gallery} from '../components';

function Espaco(): JSX.Element {
  return (
    <>
      <Header/>
      <Gallery/>
      <ContactButton/>
      <Footer/>
    </>
  )
}

export default Espaco