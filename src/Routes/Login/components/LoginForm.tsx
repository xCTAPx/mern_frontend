import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Icon } from '@material-ui/core';
import styles from './LoginForm.module.scss';
import { loginSchema } from '../../../validation';
import { Input } from '../../../components';

interface IValues {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

const INITIAL_VALUES: IValues = {
  email: '',
  nickname: '',
  password: '',
  passwordConfirmation: '',
};

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validateOnBlur
      validationSchema={loginSchema}
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
          passwordConfirmation:
            password_confirmationTouched,
        } = touched;

        const {
          email: emailError,
          nickname: nicknameError,
          password: passwordError,
          passwordConfirmation: password_confirmationError,
        } = errors;

        const email = emailTouched && emailError;
        const nickname = nicknameTouched && nicknameError;
        const password = passwordTouched && passwordError;
        const passwordConfirmation =
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
                  error={passwordConfirmation}
                  errorMessage={passwordConfirmation}
                  name="passwordConfirmation"
                  placeholder="Confirm password"
                  type="password"
                />
              </div>
              <Button
                color="primary"
                endIcon={<Icon>send</Icon>}
                size="large"
                type="submit"
                variant="contained">
                Submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
