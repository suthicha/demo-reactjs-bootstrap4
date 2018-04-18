import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class FullFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href={null}>CTI</a> &copy; 2018 Developer.</span>
        <span className="ml-auto">Powered by <a href={null}>Infotech</a></span>
      </React.Fragment>
    );
  }
}

FullFooter.propTypes = propTypes;
FullFooter.defaultProps = defaultProps;

export default FullFooter;
