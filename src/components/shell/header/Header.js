import React, { Component } from 'react';
import baseStyles from './styles/base.css';

import Logo from "../logo";
import HomeLink from "./components/homeLink";
import MenuToggle from "./components/menuToggle";
import UtilityNav from "./components/utilityNav";
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
            {(BRAND === 'base' || BRAND === 'ipage') && <HomeLink />}
            <div className={"navbar-brand " + baseStyles.navbarBrand + " " +  + theme.navbarBrand}>
              {(BRAND === 'base' || BRAND === 'websiteBuilder') && <MenuToggle />}
              <Logo />
            </div>
          </div>
          {(BRAND === 'websiteBuilder') &&
          <div className={baseStyles.navbarBreadcrumb + " " + theme.navbarBreadcrumb}>
            <span>
              <span>Site details</span>
            </span>
          </div>
          }
          <UtilityNav />
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
