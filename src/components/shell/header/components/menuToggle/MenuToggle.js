import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class MenuToggle extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
//    const BRAND = process.env.UP_UI_THEME;
    return (
      <a href="/" className={"glyphicon glyphicon-menu-hamburger btn-menu toggle " + baseStyles.menuToggle + " " + theme.menuToggle}>
        <i className="fa fa-bars" />
      </a>
    )
  }
}
