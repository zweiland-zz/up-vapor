import React, { Component } from 'react';
import baseStyles from './styles/base.css';

export default class Logo extends Component {
  render(props) {
    var { theme } = this.props;
    return (
      <div className={baseStyles.logo + " " + theme.logo}>
        <div className={baseStyles.brandName + " " + theme.brandName}>
          Logo
        </div>
      </div>
    )
  }
}
