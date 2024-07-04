import Space from '../img/space.jpg'
import Space2 from '../img/space2.jpg'
class Image{
    insertSpaceImage(){
        const img = document.createElement('img');

        img.src = Space;
        img.width=200;

        document.querySelector('body').appendChild(img);
    }
    insertSpaceImage2(){
        const img = document.createElement('img');

        img.src = Space2;
        img.width=200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;