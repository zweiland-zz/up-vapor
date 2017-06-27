import React, { Component } from 'react';
import baseStyles from './styles/base.css';

import Icon from "../../../../common/icon";

export default class UtilityNav extends Component {
  render(props) {
    var { theme } = this.props;
//    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={"collapse navbar-collapse" + baseStyles.utilityWrap + " " + theme.utilityWrap}>
        <ul className={baseStyles.utilityNav + " " + theme.utilityNav}>
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-bell" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon iconName="question-sign" />
              <span className="glyphicon glyphicon-question-sign" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="/account">
              <span className="glyphicon glyphicon-user" aria-hidden="true" />
              My Account
              <span className="glyphicon glyphicon-triangle-bottom" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
