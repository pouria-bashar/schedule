import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ Component, error }) => (
  <div>
    <Component />
    {
      error && <span>{error}</span>
    }
  </div>
);
FormField.propTypes = {

};
export default FormField;
