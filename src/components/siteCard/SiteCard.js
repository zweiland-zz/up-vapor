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
          <div className={"panel panel-default align-center domain-name site"}>
            <div className="panel-heading">
              <div className="site-thumb">
              </div>
            </div>
            <div className="panel-body">
              <h3>
                <a href="./#/">www.domain.com</a>
              </h3>
              <ul className="nav nav-pills site-status">
                <li role="presentation" className="active">
                  <a href="./#/">Live</a>
                </li>
                <li role="presentation">
                  <a href="./#/">Private</a>
                </li>
                <li role="presentation">
                  <a href="./#/">SSL</a>
                </li>
                <li role="presentation">
                  <a href="./#/">Renew</a>
                </li>
              </ul>
              <p>external domain</p>
            </div>
            <div className="panel-footer">
              <a className="manage" href="./#/">
                <strong>Manage</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
