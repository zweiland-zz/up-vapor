import React from 'react';

const { string } = PropTypes;
const propTypes = {
  siteImgUrl: string,
};

export default class Icon extends React.Component {
  render(props) {
    return (
      <div />
      // {this.props.children}
    )
  }
}


const defaultProps = {
  siteImgUrl: "/images/hd-site-thumb.png",
  siteName: "Site Name",
  siteDomain: "site-domain.com",
  siteClass: "site-name",
};
const siteImgUrlStye = {
  backgroundImage: 'url(' + this.siteImgUrl + ')'
}
