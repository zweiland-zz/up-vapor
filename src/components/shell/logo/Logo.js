import React, { Component } from 'react';
import { } from 'react-router-dom';
import baseStyles from './styles/base.css';

export default class Logo extends Component {
  render(props) {
    var { theme } = this.props;
    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={baseStyles.logo + " " + theme.logo}>
        {BRAND === 'base' &&
        <a href="/">Brand Name</a>
        }
        {BRAND === 'bluehost' &&
          <a href="/">
            <img src="/images/bluehost-logo.svg" alt="Bluehost Logo" />
          </a>
        }
        {BRAND === 'ipage' &&
          <a href="/">
            <img src="/images/ipage-logo.svg" alt="iPage Logo" />
          </a>
        }
        {BRAND === 'websiteBuilder' &&
          <a href="/">
            <img src="/images/website-builder-logo.png" alt="Website Builder Logo" />
          </a>
        }
      </div>
    )
  }
}
