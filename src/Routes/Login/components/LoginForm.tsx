import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validateOnBlur
      validationSchema={loginSchema}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSubmit={(values: IValues) => {
        dispatch({
          type: 'LOGIN_FORM_SEND_DATA',
          payload: values,
        });
      }}>
      {({ errors, touched }) => {
        const {
          email: emailTouched,
          nickname: nicknameTouched,
          password: passwordTouched,
          password_confirmation:
            password_confirmationTouched,
        } = touched;

        const {
          email: emailError,
          nickname: nicknameError,
          password: passwordError,
          password_confirmation: password_confirmationError,
        } = errors;

        const email = emailTouched && emailError;
        const nickname = nicknameTouched && nicknameError;
        const password = passwordTouched && passwordError;
        const password_confirmation =
          password_confirmationTouched &&
          password_confirmationError;

        return (
          <Form className={styles.loginWrapper}>
            <h6 className={styles.title}>Login Page</h6>
            <div className={styles.form}>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  error={email}
                  errorMessage={email}
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  error={nickname}
                  errorMessage={nickname}
                  name="nickname"
                  placeholder="Nickname"
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  error={password}
                  errorMessage={password}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  component={Input}
                  error={password_confirmation}
                  errorMessage={password_confirmation}
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
