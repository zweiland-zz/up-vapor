import React, { Component } from 'react';
import baseStyles from './styles/base.css';

import Row from "../common/row";

export default class SiteCard extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    // const BRAND = process.env.UP_UI_THEME;
    return (
      <div className="col-lg-4">
        <div className={baseStyles.siteCard + " " + theme.siteCard}>
          <div className={"panel panel-default align-center domain-name"}>
            <div className="panel-heading">
              <div className={baseStyles.siteThumb + " " + theme.siteThumb} />
            </div>
            <div className="panel-body">
              <h3>
                <a href="/" className="link-dark">www.domain.com</a>
              </h3>
              <div className={baseStyles.siteStatus + " " + theme.siteStatus}>
                <ul className="nav nav-pills">
                  <li className="active">
                    <a href="/">Live</a>
                  </li>
                  <li>
                    <a href="/">Private</a>
                  </li>
                  <li>
                    <a href="/">SSL</a>
                  </li>
                  <li>
                    <a href="/">Renew</a>
                  </li>
                </ul>
              </div>
              <p>external domain</p>
            </div>
            <div className="panel-footer">
              <a className="manage bold fsxs uppercase" href="./#/">Manage</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
