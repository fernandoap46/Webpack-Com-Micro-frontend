import Title from "./components/title.js";
import Image from "./components/image.js";
import Button from "./components/button.js";
import warning from './templates/warning.html';
import './styles/warning.css';

const title= new Title();
title.creat("Primeira pagina");

const image = new Image();
image.insertSpaceImage();

const image2 = new Image();
image2.insertSpaceImage2();

const button = new Button();
button.creat();

// Babel Spread
const obj = {a: 1, b: 2, c: 3, d: 4, e: 99};

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);

// Import de HTML
const body = document.querySelector('body');
body.innerHTML += warning;