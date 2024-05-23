import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';



import Page from './Project3-MemeGenerator/Page';
import './Project3-MemeGenerator/PageStyles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);



reportWebVitals();
