import Title from "./components/title.js";
import Image from "./components/image.js";
import Button from "./components/button.js";

const title= new Title();
title.creat("Primeira pagina");

const image = new Image();
image.insertSpaceImage();

const image2 = new Image();
image2.insertSpaceImage2();

const button = new Button();
button.creat();