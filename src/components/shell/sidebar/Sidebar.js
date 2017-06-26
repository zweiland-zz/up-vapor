import React, { Component } from 'react';
import { } from 'react-router-dom';
import baseStyles from './styles/base.css';

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
              <a href="/">
                <span className="fa fa-home solo">Home</span>
              </a>
            </li>
            <li>
              <a href="#anch1">
                <span className="fa fa-anchor solo">My Sites</span>
              </a>
            </li>
            <li>
              <a href="#anch2">
                <span className="fa fa-anchor solo">Marketplace</span>
              </a>
            </li>
            <li>
              <a href="#anch3">
                <span className="fa fa-anchor solo">Email</span>
              </a>
            </li>
            <li>
              <a href="#anch4">
                <span className="fa fa-anchor solo">Domains</span>
              </a>
            </li>
            <li>
              <a href="#anch4">
                <span className="fa fa-anchor solo">Advanced</span>
              </a>
            </li>
            <li>
              <a href="#anch4">
                <span className="fa fa-anchor solo">Help</span>
              </a>
            </li>
          </ul>

          {BRAND === 'base' &&
            <ul className="nav nav-pills nav-stacked account-nav">
              <li>
                <a href="#home"><span className="fa fa-home solo">Settings</span></a>
              </li>
              <li>
                <a href="#anch1">
                  <span className="fa fa-anchor solo">Support</span>
                </a>
              </li>
              <li>
                <a href="#anch2">
                  <span className="fa fa-anchor solo">Logout</span>
                </a>
              </li>
              <li>
                <a href="#anch2">
                  <span className="account-username">test30proto</span>
                  <br />
                  <span className="account-info">admin@test30proto.com</span>
                </a>
              </li>
            </ul>
          }
        </nav>
      </div>
    )
  }
}
