import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class Logo extends Component {
  render(props) {
    var { theme } = this.props;
//    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={baseStyles.homeLink + " " + theme.homeLink}>
        <a href="/">
          <i className="glyphicon glyphicon-home home-link" />
        </a>
      </div>
    )
  }
}
