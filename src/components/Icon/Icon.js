import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <i className="material-icons">{name}</i>
);
Icon.propTypes = {
  name: PropTypes.string,
};
export default Icon;
