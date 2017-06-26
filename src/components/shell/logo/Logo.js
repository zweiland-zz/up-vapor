import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class Logo extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={baseStyles.logo + " " + theme.logo}>
        {BRAND === 'base' &&
        <text>Brand Name</text>
        }
        {BRAND === 'bluehost' &&
          <img src="/images/bluehost-logo.svg" alt="Bluehost Logo" />
        }
        {BRAND === 'ipage' &&
          <img src="/images/ipage-logo.svg" alt="iPage Logo" />
        }
      </div>
    )
  }
}
