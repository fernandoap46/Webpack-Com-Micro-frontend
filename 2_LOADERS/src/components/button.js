import './button.scss';
class Button{
    creat(){
        const button = document.createElement('button');
        button.innerText="Clique em mim";
        button.classList.add('btn');
        document.querySelector('body').appendChild(button);
    }
}
export default Button;