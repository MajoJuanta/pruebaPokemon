import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';


const container = document.getElementById('app');
 

ReactDOM.render(<App  />, container);


reportWebVitals();