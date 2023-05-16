import './index.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  height: '700px'
}

const slideImages = [
  {
    url: 'https://archello.s3.eu-central-1.amazonaws.com/images/2014/03/21/6-796.1506072962.2457.jpg'
  },
  {
    url: 'https://archello.s3.eu-central-1.amazonaws.com/images/2017/04/14/9-486.1506797066.7737.jpg'
  },
  {
    url: 'https://archello.s3.eu-central-1.amazonaws.com/images/2017/04/14/2-1473.1506797067.8791.jpg'
  },
  {
    url: 'https://archello.s3.eu-central-1.amazonaws.com/images/2017/04/14/3-1293.1506797069.456.jpg'
  },
  {
    url: 'https://archello.s3.eu-central-1.amazonaws.com/images/2017/04/14/4-1114.1506797070.4911.jpg'
  },
  {
    url: 'https://archello.s3.eu-central-1.amazonaws.com/images/2017/04/14/7-665.1506797073.6723.jpg'
  }
];

function Gallery(): JSX.Element {
  return (
    <div className="slide-container">
        <Slide indicators={true} autoplay={true} infinite={true} pauseOnHover={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}/>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default Gallery