import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import baseStyles from './styles/base.css';

export default class MenuToggle extends Component {
  render(props) {
    var { theme } = this.props;
//    const BRAND = process.env.UP_UI_THEME;
    return (
      <Link to="/" className={"glyphicon glyphicon-menu-hamburger btn-menu toggle " + baseStyles.menuToggle + " " + theme.menuToggle}>
        <i className="fa fa-bars" />
      </Link>
    )
  }
}
