import React from 'react';
import styles from './Login.module.scss';

export const Login: React.FC = () => {
  const mode =
    !process.env.NODE_ENV ||
    process.env.NODE_ENV === 'development'
      ? 'development'
      : 'production';

  return (
    <h6 className={styles.text}>Login Page ({mode})</h6>
  );
};
