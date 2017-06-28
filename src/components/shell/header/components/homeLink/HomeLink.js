import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import baseStyles from './styles/base.css';

export default class Logo extends Component {
  render(props) {
    var { theme } = this.props;
//    const BRAND = process.env.UP_UI_THEME;
    return (
        <Link to="/" className={baseStyles.homeLink + " " + theme.homeLink}>
          <i className="glyphicon glyphicon-home home-link" />
        </Link>
    )
  }
}
