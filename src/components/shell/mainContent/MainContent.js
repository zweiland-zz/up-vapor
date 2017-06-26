import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class MainContent extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    // const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={baseStyles.mainContent + " " + theme.mainContent}>
        {this.props.children}
      </div>
    )
  }
}
