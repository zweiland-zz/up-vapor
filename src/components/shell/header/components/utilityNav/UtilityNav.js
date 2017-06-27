import React, { Component } from 'react';
import baseStyles from './styles/base.css';

import Icon from "../../../../common/icon";

export default class UtilityNav extends Component {
  render(props) {
    var { theme } = this.props;
    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={"collapse navbar-collapse " + baseStyles.utilityWrap + " " + theme.utilityWrap}>
        <ul className={baseStyles.utilityNav + " " + theme.utilityNav}>
          {BRAND === 'bluehost' && <li><a href="/"><Icon iconName="search" /></a></li> }
          <li>
            <a href="/">
              <Icon iconName="bell" />
            </a>
          </li>
          {BRAND !== 'bluehost' &&
          <li>
            <a href="/">
              <Icon iconName="question-sign" />
            </a>
          </li>
          }
          {BRAND === 'bluehost' &&
            <li>
              <a href="/"><Icon iconName="shopping-cart" /></a>
            </li>
          }
          <li className={baseStyles.utilityProfile + " " + theme.utilityProfile}>
            <a href="/account">
              {(BRAND === 'base' || BRAND === 'bluehost') && <Icon iconName="user" /> }
              {BRAND === 'ipage' && <img className="avatar avatar-s" src="/images/profile.jpeg" alt="profile" /> }
              {(BRAND === 'base' || BRAND === 'ipage') && <span>My Account</span> }
              <Icon iconName="triangle-bottom" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
