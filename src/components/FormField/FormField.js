import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormField.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const getComponent = (Component) => {
  return Component;
}

const FormField = ({ error, label, className, field, registerChild, ...rest}) => {
  const Component = getComponent(field);
  return (
    <div className={cx({ formField: true, [className]: !!className, errorBorder: !!error })}>
      <label>{label}</label>
      <Component ref={registerChild} {...rest} />
      {
        error && <div className={styles.error}>{error}</div>
      }
    </div>
  )
}
FormField.propTypes = {

};
export default FormField;
