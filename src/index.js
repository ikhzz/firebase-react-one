import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// maybe i set the the component structure wrong, this is the easiest way i can think to manipulate navbar and content display
document.querySelector('.nyam').addEventListener('click', () => {
  document.querySelector('aside').classList.toggle('open')
  document.querySelector('.main').classList.toggle('openc')
})