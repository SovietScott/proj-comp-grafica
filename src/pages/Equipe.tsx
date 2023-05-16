import './App.scss'
import {Header, ContactButton, Footer, TeamPanel} from '../components';
import psico1 from '../assets/psico1.jpg';
import psico2 from '../assets/psico2.jpg';
import psico3 from '../assets/psico3.jpg';
import psico4 from '../assets/psico4.jpg';

let imageList: string[] = [psico1,psico2,psico3,psico4]

function Equipe(): JSX.Element{
  return (
    <>
      <Header/>
      <TeamPanel images={imageList}/>
      <ContactButton/>
      <Footer/>
    </>
  )
}

export default Equipe