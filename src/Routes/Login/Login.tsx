import React from 'react';
import styles from './Login.module.scss';
import { Input } from '../../components';

export const Login: React.FC = () => {
  return (
    <section className={styles.background}>
      <div className={styles.loginWrapper}>
        <h6 className={styles.title}>Login Page</h6>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <Input placeholder="E-mail" />
          </div>
          <div className={styles.inputWrapper}>
            <Input placeholder="Nickname" />
          </div>
          <div className={styles.inputWrapper}>
            <Input placeholder="Password" type="password" />
          </div>
          <div className={styles.inputWrapper}>
            <Input
              placeholder="Confirm password"
              type="password"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
