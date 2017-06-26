import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class Row extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    // const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={"row " + baseStyles.row + " " + theme.row}>
      {this.props.children}
      </div>
    )
  }
}
