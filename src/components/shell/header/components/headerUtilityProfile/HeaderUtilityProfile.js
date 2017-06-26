import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class HeaderUtilityProfile extends Component {
  render(props) {
    var { theme } = this.props;
    const BRAND = process.env.UP_UI_THEME;
    return (
      <div>
        Nav Profile
      </div>
    )
  }
}
