import React, { Component } from 'react';
import baseStyles from './themes/base.css';

import Header from "./components/header";

class App extends Component {
  render(props) {
    console.log(process.env);
    return (
      <div className={baseStyles.app}>
        <div class={baseStyles.wrapper}>
          <div className={baseStyles.app}>
            <Header />

            <div className={baseStyles.sidebarWrapper}>
            </div>

            <p className={baseStyles.intro}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
