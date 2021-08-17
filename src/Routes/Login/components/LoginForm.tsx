import React, { FormEvent } from 'react';
import styles from './LoginForm.module.scss';
import { Input } from '../../../components';

export const LoginForm: React.FC = () => {
  return (
    <form
      className={styles.loginWrapper}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}>
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
      <button type="submit">Send</button>
    </form>
  );
};
