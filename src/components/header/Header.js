import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import baseStyles from './styles/base.css';

import Logo from "../logo";
// import Icon from "../icon";
// import HeaderUtilityProfile from "./components/headerUtilityProfile";

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
