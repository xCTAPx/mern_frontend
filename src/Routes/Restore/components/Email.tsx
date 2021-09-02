import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button, Icon } from '@material-ui/core';
import { authSchema } from '../../../validation';
import styles from '../../../styles/Credentials.module.scss';
import { Input } from '../../../components';
import { RESTORE_PASSWORD } from '../../../store';

interface IValues {
  email: string;
}

const INITIAL_VALUES: IValues = {
  email: '',
};

export const Email: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validateOnBlur
      validationSchema={authSchema}
      onSubmit={(values: IValues) => {
        dispatch({
          type: RESTORE_PASSWORD,
          payload: values,
        });
      }}>
      {({ errors, touched }) => {
        const { email: emailTouched } = touched;

        const { email: emailError } = errors;

        const email = emailTouched && emailError;

        return (
          <Form className={styles.wrapper}>
            <h6 className={styles.title}>
              Enter your e-mail
            </h6>
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
              <Button
                color="primary"
                endIcon={<Icon>send</Icon>}
                size="large"
                type="submit"
                variant="contained">
                Send link
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};