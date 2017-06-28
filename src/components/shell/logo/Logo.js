import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import baseStyles from './styles/base.css';

export default class Logo extends Component {
  render(props) {
    var { theme } = this.props;
    const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={baseStyles.logo + " " + theme.logo}>
        {BRAND === 'base' &&
        <Link to="/">Brand Name</Link>
        }
        {BRAND === 'bluehost' &&
          <Link to="/">
            <img src="/images/bluehost-logo.svg" alt="Bluehost Logo" />
          </Link>
        }
        {BRAND === 'ipage' &&
          <Link to="/">
            <img src="/images/ipage-logo.svg" alt="iPage Logo" />
          </Link>
        }
        {BRAND === 'websiteBuilder' &&
          <Link to="/">
            <img src="/images/logo-hostgator.png" alt="HostGator Logo" />
          </Link>
        }
      </div>
    )
  }
}
