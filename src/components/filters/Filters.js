import React, { Component } from 'react';
import baseStyles from './styles/base.css';

import Icon from "../common/icon";

export default class Filters extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    const BRAND = process.env.UP_UI_THEME;
    return (
        <div className={"col-md-12 " + baseStyles.filters + " " + theme.filters}>
          <ul className="nav nav-pills pills-toggle right">
            <li className="active">
              <a href="/">
                <Icon iconName="th-large" />
              </a>
            </li>
            <li role="presentation">
              <a href="/">
                <Icon iconName="th-list" />
              </a>
            </li>
            <li role="presentation">
              <a href="/">Advanced</a>
            </li>
          </ul>
          {BRAND === 'base' &&
            <ul className="nav nav-tabs content-tabs">
              <li>
                <h1 className="fsl">Dashboard</h1>
              </li>
              <li className="active">
                <a href="/">For You</a>
              </li>
              <li>
                <a href="/">All Applications</a>
              </li>
            </ul>
          }
          {BRAND === 'ipage' &&
            <h1 className="fsl mt2">My Domains</h1>
          }
        </div>
    )
  }
}
