import React, { useState, ChangeEvent } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import styles from './Auth.module.scss';
import commonStyles from '../../styles/Credentials.module.scss';
import { LoginForm, RegistrationForm } from './components';

type TabsValues = 0 | 1;

export const Auth: React.FC = () => {
  const [tabsValue, setTabsValue] = useState<TabsValues>(0);

  const handleChange = (
    e: ChangeEvent<Record<string, unknown>>,
    newValue: TabsValues
  ) => {
    setTabsValue(newValue);
  };

  return (
    <section className={commonStyles.background}>
      <Tabs
        aria-label="disabled tabs example"
        className={styles.tabs}
        indicatorColor="primary"
        textColor="primary"
        value={tabsValue}
        onChange={handleChange}>
        <Tab label="Registration" value={0} />
        <Tab label="Login" value={1} />
      </Tabs>
      {tabsValue === 0 ? (
        <RegistrationForm />
      ) : (
        <LoginForm />
      )}
    </section>
  );
};
