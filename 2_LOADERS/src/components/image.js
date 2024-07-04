import Space from '../img/space.jpg'
class Image{
    insertSpaceImage(){
        const img = document.createElement('img');

        img.src = Space;
        img.width=200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;