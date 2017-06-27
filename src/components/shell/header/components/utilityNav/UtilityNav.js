import React, { Component } from 'react';
import baseStyles from './styles/base.css';

import Icon from "../../../../common/icon";

export default class UtilityNav extends Component {
  render(props) {
    var { theme } = this.props;
//    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={"collapse navbar-collapse " + baseStyles.utilityWrap + " " + theme.utilityWrap}>
        <ul className={baseStyles.utilityNav + " " + theme.utilityNav}>
          <li>
            <a href="/">
              <Icon iconName="bell" />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon iconName="question-sign" />
            </a>
          </li>
          <li>
            <a href="/account">
              <Icon iconName="user" />
              My Account
              <Icon iconName="triangle-bottom" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
