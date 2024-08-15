import Contact from './Contatos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>
      <Contact />
    </React.StrictMode>
  );