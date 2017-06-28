import React, { Component } from 'react';
import PropTypes from 'prop-types';
import baseStyles from './styles/base.css';

const { string } = PropTypes;
const propTypes = {
  siteName: string,
  siteDomain: string,
  siteClass: string,
  siteImgUrl: string,
  siteImgUrlStyle: string,
  domainInfo: string,
};
const defaultProps = {
  siteImgUrl: '/images/hd-site-thumb.png',
  siteName: 'Site Name',
  siteDomain: 'site-domain.com',
  siteClass: 'site-name',
  domainInfo: 'external domain',
};

class SiteCard extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    // const BRAND = process.env.UP_UI_THEME;
    const siteCardImgStyle = {
      backgroundImage: "url("+this.props.siteImgUrl+")",
    }
    return (
      <div className="col-lg-4">
        <div className={baseStyles.siteCard + " " + theme.siteCard}>
          <div className={"panel panel-default align-center domain-name"}>
            <div className="panel-heading">
              <div
                className={baseStyles.siteThumb + " " + theme.siteThumb}
                style={siteCardImgStyle}
              />
            </div>
            <div className="panel-body">
              <h3>
                <a href="/" className="link-dark">
                  {this.props.siteDomain}
                </a>
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
              <p>{this.props.domainInfo}</p>
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

SiteCard.propTypes = propTypes;
SiteCard.defaultProps = defaultProps;
export default SiteCard;
