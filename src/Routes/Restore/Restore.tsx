import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button, Icon } from '@material-ui/core';
import { authSchema } from '../../validation';
import styles from '../../styles/Credentials.module.scss';
import { Input } from '../../components';

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

export const Restore: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validateOnBlur
      validationSchema={authSchema}
      onSubmit={(values: IValues) => {
        dispatch({
          type: 'LOGIN_FORM_SEND_DATA',
          payload: values,
        });
      }}>
      {({ errors, touched }) => {
        const {
          email: emailTouched,
          password: passwordTouched,
        } = touched;

        const {
          email: emailError,
          password: passwordError,
        } = errors;

        const email = emailTouched && emailError;
        const password = passwordTouched && passwordError;

        return (
          <Form className={styles.wrapper}>
            <h6 className={styles.title}>Login</h6>
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
                  error={password}
                  errorMessage={password}
                  name="password"
                  placeholder="Password"
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
