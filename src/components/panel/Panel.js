import React, { Component } from 'react';
import PropTypes from 'prop-types';
import baseStyles from './styles/base.css';

const { string } = PropTypes;
const propTypes = {
  panelTitle: string.isRequired,
  panelDesc: string.isRequired,
  panelButtonText: string,
  panelAlign: string,
};
const defaultProps = {
  panelTitle: "Panel title",
  panelDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  panelButtonText: "Button",
};

export default class Panel extends Component {
  render(props) {
    var { theme } = this.props;
    console.log(process.env.UP_UI_THEME);
    // const BRAND = process.env.UP_UI_THEME;
    return (
      <div className={"panel panel-default align-" + this.props.panelAlign + " " + baseStyles.panel + " " + theme.panel}>
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.panelTitle}</h3>
        </div>
        <div className="panel-body">
          <p>{this.props.panelDesc}</p>
          <button type="button" className="btn btn-default">{this.props.panelButtonText}</button>
        </div>
      </div>
    )
  }
}

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
