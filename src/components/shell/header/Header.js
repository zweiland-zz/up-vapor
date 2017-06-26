import React, { Component } from 'react';
import { } from 'react-router-dom';
import baseStyles from './styles/base.css';

import Logo from "../logo";
import HomeLink from "./components/homeLink";
import MenuToggle from "./components/menuToggle";
// import Icon from "../icon";
// import HeaderUtilityProfile from "./components/headerUtilityProfile";

export default class Header extends Component {
  render(props) {
    var { theme } = this.props;
    const BRAND = process.env.UP_UI_THEME;
    return (
      <nav className={baseStyles.header + " " + theme.header}>
        <div className="container-fluid">
          <div className={"navbar-header"}>
            {BRAND === 'base' && <HomeLink />}
            {BRAND === 'ipage' && <HomeLink />}
            <div className="navbar-brand">
              {BRAND === 'base' && <MenuToggle />}
              <Logo />
            </div>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="/">
                  <span className="glyphicon glyphicon-bell" aria-hidden="true"></span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    My Account
                  <span className="glyphicon glyphicon-triangle-bottom"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


// <div className="navbar navbar-inverse navbar-fixed-top">
//   <div className="container-fluid">
//     <div className={baseStyles.header + " " + theme.header}>
//       <div className="navbar-brand home-link">
//         <a href="/">
//           <i className="glyphicon glyphicon-home home-link"></i>
//         </a>
//       </div>
//       <div className="navbar-brand">
//         <Logo />
//       </div>
//     </div>
//   </div>
// </div>
