import React from 'react';
import styles from './Login.module.scss';
import { LoginForm } from './components';

export const Login: React.FC = () => {
  return (
    <section className={styles.background}>
      <LoginForm />
    </section>
  );
};
