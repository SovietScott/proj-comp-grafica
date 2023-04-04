import './App.css'
import {Header, Footer, InfoCard, Parallax, ContactButton} from '../components';

function Home(): JSX.Element{
  return (
    <>
      <Header/>
      <Parallax/>
      <InfoCard/>
      <ContactButton/>
      <Footer/>
    </>
  )
}

export default Home