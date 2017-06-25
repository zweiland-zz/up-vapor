import React, { Component } from 'react';
import baseStyles from './themes/base.css';

import Header from "./components/header";

class App extends Component {
  render(props) {
    console.log(process.env);
    return (
      <div className={baseStyles.app}>
        <Header />
        <p className={baseStyles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
