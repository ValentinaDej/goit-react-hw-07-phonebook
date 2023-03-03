import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ title, type, onClick }) => {
  return (
    <button className={styles.buttontForm} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

Button.prototypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf[('submit', 'button')],
  onClick: PropTypes.func,
};
