import React, { Component } from 'react';
import baseStyles from './styles/base.css';

import Logo from "../logo";

export default class Header extends Component {
  render(props) {
    var { theme } = this.props;
    return (
      <div className={baseStyles.header + " " + theme.header}>
        <Logo />
      </div>
    )
  }
}
