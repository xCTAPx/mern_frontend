import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Icon } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styles from '../../../../styles/Credentials.module.scss';
import { loginSchema } from '../../../../validation';
import { Input } from '../../../../components';
import { useActions } from '../../../../hooks';

interface IValues {
  email: string;
  password: string;
}

const INITIAL_VALUES: IValues = {
  email: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const { loginAction } = useActions();

  const history = useHistory();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validateOnBlur
      validationSchema={loginSchema}
      onSubmit={loginAction}>
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

              <div className={styles.textButtonContainer}>
                <Button
                  color="primary"
                  onClick={() => history.push('/restore')}>
                  Forget password?
                </Button>
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
