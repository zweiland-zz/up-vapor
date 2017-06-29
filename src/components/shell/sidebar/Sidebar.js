import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import baseStyles from './styles/base.css';

import Icon from "../../common/icon";

export default class Sidebar extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={baseStyles.sidebar + " " + theme.sidebar}>
        <nav id="spy">
          <ul className="nav nav-pills nav-stacked primary-nav">
            <li>
              <Link to="/" className="active">
                <Icon iconName="home" />
                <span className="fa fa-home solo">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/sites">
                <i className="glyphicon">
                  {BRAND === 'websiteBuilder' && <img src="/images/icon-wordpress-logo.svg" alt="WP" className="wordpress-logo" />}
                  {BRAND !== 'websiteBuilder' && <img src="/images/icon-wordpress-logo-b.svg" alt="WP" className="wordpress-logo" />}
                </i>
                <span className="fa fa-anchor solo">My Sites</span>
              </Link>
            </li>
            <li>
              <Link to="/marketplace">
                <Icon iconName="tag" />
                <span className="fa fa-anchor solo">Marketplace</span>
              </Link>
            </li>
            <li>
              <Link to="/email">
                <Icon iconName="envelope" />
                <span className="fa fa-anchor solo">Email</span>
              </Link>
            </li>
            <li>
              <Link to="/domains">
                <Icon iconName="globe" />
                <span className="fa fa-anchor solo">Domains</span>
              </Link>
            </li>
            <li>
              <Link to="/cpanel">
                <Icon iconName="screenshot" />
                <span className="fa fa-anchor solo">cPanel</span>
              </Link>
            </li>
            <li>
              <a href="/help">
                <Icon iconName="record" />
                <span className="fa fa-anchor solo">Help</span>
              </a>
            </li>
            <li>
              <Link to="/chat">
                <Icon iconName="comment" />
                <span className="fa fa-anchor solo">Live Chat</span>
              </Link>
            </li>
          </ul>

          {BRAND === 'base' &&
            <ul className="nav nav-pills nav-stacked account-nav">
              <li>
                <Link to="/settings">
                  <span className="fa fa-home solo">Settings</span>
                </Link>
              </li>
              <li>
                <Link to="/help">
                  <span className="fa fa-anchor solo">Support</span>
                </Link>
              </li>
              <li>
                <Link to="/account/logout">
                  <span className="fa fa-anchor solo">Logout</span>
                </Link>
              </li>
              <li>
                <Link to="/account">
                  <span className="account-username">test30proto</span>
                  <br />
                  <span className="account-info">admin@test30proto.com</span>
                </Link>
              </li>
            </ul>
          }
        </nav>
      </div>
    )
  }
}
