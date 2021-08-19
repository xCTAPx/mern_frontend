/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './LoginForm.module.scss';
import { loginSchema } from '../../../validation';
import { Input } from '../../../components';

interface IValues {
  email: string;
  nickname: string;
  password: string;
  password_confirmation: string;
}

const INITIAL_VALUES: IValues = {
  email: '',
  nickname: '',
  password: '',
  password_confirmation: '',
};

export const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={loginSchema}
      onSubmit={(values: IValues) => {}}>
      {({ errors, touched }) => {
        return (
          <Form className={styles.loginWrapper}>
            <h6 className={styles.title}>Login Page</h6>
            <div className={styles.form}>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  name="nickname"
                  placeholder="Nickname"
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  name="password_confirmation"
                  placeholder="Confirm password"
                  type="password"
                />
              </div>
            </div>
            <button type="submit">Send</button>
          </Form>
        );
      }}
    </Formik>
  );
};
