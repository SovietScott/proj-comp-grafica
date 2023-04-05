import './index.css'
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
    url: 'https://media.istockphoto.com/id/1280350192/pt/foto/simple-and-comfortable-couch-panorama.jpg?s=612x612&w=0&k=20&c=rFZjXDMS3-XuXSPjBH7VKWhR5XRe4UyGxHt31cUhQes=',
  },
  {
    url: 'https://media.istockphoto.com/id/1264073680/pt/foto/living-room-with-white-bookcase.jpg?s=612x612&w=0&k=20&c=pEc3ZtPZo2xsvnD2iXZJKr7OZzg-ZFcOjb_DqiHjwEw=',
  },
  {
    url: 'https://media.istockphoto.com/id/930527924/pt/foto/living-room-in-luxury-home.jpg?s=612x612&w=0&k=20&c=bOQcVOMXK-APvluMHzv5UXg9DeU2yeLjIgwoEeElpsA=',
  },
  {
    url: 'https://media.istockphoto.com/id/1463727067/pt/foto/office-room-in-an-apartment-with-a-desk-chair-and-bookshelves.jpg?s=612x612&w=0&k=20&c=4rQBgjqaHjq6QzBTGUQVA3CHraWapbxgbK9rd2ANQl0='
  },
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