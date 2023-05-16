import './App.scss'
import {Header, Footer, InfoCard, Parallax, ContactButton} from '../components';

import sofa from '../assets/sofa.png';
import mandala from '../assets/mandala.png'; 
import mask from '../assets/theater.png'; 
import tree from '../assets/nature.png'; 
import rat from '../assets/rato.png'; 
import brain from '../assets/brain.png';
import psico from '../assets/psico4.jpg';
import pac1 from '../assets/pac1.jpg';
import pac2 from '../assets/pac2.jpg';
import pac3 from '../assets/pac3.jpg';

var imageList1 : {name : string, url : string}[] = [
  {name : "Psicanálise", url : sofa},{name : "Análise Comportamental",url : rat},
  {name : "TCC", url : brain},{name : "Gestalt", url : tree},
  {name : "Analista Jungiana", url : mandala},{name : "Psicodrama", url : mask}
];
var imageList2 : string[] = [
  pac1,
  pac2,
  psico,
  pac3
]; 

function Home(): JSX.Element{
  return (
    <>
      <Header/>
      <Parallax List={imageList1}/>
      <InfoCard images={imageList2}/>
      <ContactButton/>
      <Footer/>
    </>
  )
}

export default Home