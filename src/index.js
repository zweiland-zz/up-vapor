import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Styles
import 'bootstrap/dist/css/bootstrap.min';
import './themes/base.css';

const BRAND = process.env.UP_UI_THEME;
if (BRAND === 'ipage') { require("./themes/ipage.css") }
if (BRAND === 'bluehost') { require("./themes/bluehost.css") }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
