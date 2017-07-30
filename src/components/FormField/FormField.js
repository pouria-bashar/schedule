import React from 'react';
import PropTypes from 'prop-types';

const getComponent = (Component) => {
  return Component;
}

const FormField = ({ error, label, className, field, registerChild, ...rest}) => {
  const Component = getComponent(field);
  return (
    <div className={className}>
      <label>{label}</label>
      <Component ref={registerChild} {...rest} />
      {
        error && <span>{error}</span>
      }
    </div>
  )
}
FormField.propTypes = {

};
export default FormField;
