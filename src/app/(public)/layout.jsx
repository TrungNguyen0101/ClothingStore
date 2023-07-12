import React from 'react';
import PropTypes from 'prop-types';

function LayoutPublic({ children }) {
  return <div>{children}</div>;
}
LayoutPublic.propTypes = {
  children: PropTypes.node,
};
LayoutPublic.defaultProps = {
  children: null,
};
export default LayoutPublic;
