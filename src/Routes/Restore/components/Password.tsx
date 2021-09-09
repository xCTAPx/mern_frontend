import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Icon } from '@material-ui/core';
import { useParams } from 'react-router';
import styles from '../../../styles/Credentials.module.scss';
import { passwordSchema } from '../../../validation';
import { Input } from '../../../components';
import { SET_NEW_PASSWORD } from '../../../store';

interface IValues {
  password: string;
  passwordConfirmation: string;
}

const INITIAL_VALUES: IValues = {
  password: '',
  passwordConfirmation: '',
};

interface IUrlParams {
  resetToken: string;
}

export const Password: React.FC = () => {
  const dispatch = useDispatch();

  const { resetToken } = useParams<IUrlParams>();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validateOnBlur
      validationSchema={passwordSchema}
      onSubmit={(values: IValues) => {
        dispatch({
          type: SET_NEW_PASSWORD,
          payload: { ...values, resetToken },
        });
      }}>
      {({ errors, touched }) => {
        const {
          password: passwordTouched,
          passwordConfirmation:
            password_confirmationTouched,
        } = touched;

        const {
          password: passwordError,
          passwordConfirmation: password_confirmationError,
        } = errors;

        const password = passwordTouched && passwordError;
        const passwordConfirmation =
          password_confirmationTouched &&
          password_confirmationError;

        return (
          <Form className={styles.wrapper}>
            <h6 className={styles.title}>
              Enter new password
            </h6>
            <div className={styles.form}>
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
                Change password
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
