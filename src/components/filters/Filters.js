import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class Filters extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    // const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={"col-md-12" + baseStyles.filters + " " + theme.filters}>
        <ul className="nav nav-pills pills-toggle right">
          <li role="presentation" className="active"><a href="/"><span className="glyphicon glyphicon-th-large"></span></a></li>
          <li role="presentation"><a href="/"><span className="glyphicon glyphicon-th-list"></span></a></li>
          <li role="presentation"><a href="/">Advanced</a></li>
        </ul>
        <ul className="nav nav-tabs content-tabs">
          <li>
            <h1 className="page-title">Dashboard</h1>
          </li>
          <li role="presentation" className="active"><a href="/">For You</a></li>
          <li role="presentation"><a href="/">All Applications</a></li>
        </ul>
      </div>
    )
  }
}
