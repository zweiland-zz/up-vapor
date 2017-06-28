import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class Ad extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    // const BRAND = process.env.UP_UI_THEME;
    return (
      <div className="col-md-12" className={"row " + baseStyles.ad + " " + theme.ad}>
        <div className={"panel panel-default " + baseStyles.adPanel + " " + theme.adPanel}>
          <p>Ad Space</p>
        </div>
      </div>
    )
  }
}
