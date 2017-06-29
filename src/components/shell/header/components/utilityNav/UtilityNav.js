import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import baseStyles from './styles/base.css';

import Icon from "../../../../common/icon";

export default class UtilityNav extends Component {
  render(props) {
    var { theme } = this.props;
    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={"collapse navbar-collapse " + baseStyles.utilityWrap + " " + theme.utilityWrap}>
        <ul className={baseStyles.utilityNav + " " + theme.utilityNav}>
          {BRAND === 'bluehost' && <li><Link to="/"><Icon iconName="search" /></Link></li> }
          {BRAND === 'websiteBuilder' &&
          <li>
            <Link to="/">
              <Icon iconName="th" />
            </Link>
          </li>
          }
          <li className={baseStyles.navNotifications + " " + theme.navNotifications}>
            <Link to="/">
              <Icon iconName="bell" />
            </Link>
            {(BRAND === 'websiteBuilder') &&
            <div className={baseStyles.navBadge + " " + theme.navBadge}>
              <span>2</span>
            </div>
            }
          </li>
          {(BRAND === 'base' || BRAND === 'ipage') &&
          <li>
            <Link to="/">
              <Icon iconName="question-sign" />
            </Link>
          </li>
          }
          {BRAND === 'bluehost' &&
            <li>
              <Link to="/">
                <Icon iconName="shopping-cart" />
              </Link>
            </li>
          }
          <li className={baseStyles.utilityProfile + " " + theme.utilityProfile}>
            <Link to="/account">
              {(BRAND === 'base' || BRAND === 'bluehost' || BRAND === 'websiteBuilder') && <Icon iconName="user" /> }
              {BRAND === 'ipage' && <img className="avatar avatar-s" src="/images/profile.jpeg" alt="profile" /> }
              {(BRAND === 'base' || BRAND === 'ipage') && <span>My Account</span> }
              {(BRAND === 'base' || BRAND === 'ipage') && <Icon iconName="triangle-bottom" />}
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
