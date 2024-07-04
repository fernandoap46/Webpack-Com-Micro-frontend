import './title.css';
class Title{
    creat(title){
        const h1 = document.createElement('h1');
        h1.innerText = title;
        h1.classList.add('main_title');
        document.querySelector('body').appendChild(h1);
    }
}

export default Title;