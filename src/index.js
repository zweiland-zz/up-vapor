import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import AccountPage from './scenes/account/page/AccountPage';
import SitesPage from './scenes/sites/page/SitesPage';
import MarketplacePage from './scenes/marketplace/page/MarketplacePage';
import EmailPage from './scenes/email/page/EmailPage';
import DomainsPage from './scenes/domains/page/DomainsPage';

// Styles
import './themes/base.css';

const BRAND = process.env.UP_UI_THEME;
if (BRAND === 'ipage') { require("./themes/ipage.css") }
if (BRAND === 'bluehost') { require("./themes/bluehost.css") }
if (BRAND === 'websiteBuilder') { require("./themes/websiteBuilder.css") }

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/account" component={AccountPage}/>
      <Route exact path="/sites" component={SitesPage}/>
      <Route exact path="/marketplace" component={MarketplacePage}/>
      <Route exact path="/email" component={EmailPage}/>
      <Route exact path="/domains" component={DomainsPage}/>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker();


  // <Route exact path="/" component={App}/>
  // <Route path="/account" component={AccountPage}/>
