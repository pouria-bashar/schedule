import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timeline.css';

const Resource = ({ style, name }) => (
  <div className={styles.resource} style={style}>{name}</div>
);
Resource.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
};
export default Resource;
