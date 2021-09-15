import React from 'react';
import { useParams } from 'react-router';
import { Email, Password } from './components';
import commonStyles from '../../styles/Credentials.module.scss';

interface IUrlParams {
  resetToken?: string;
}

export const Restore: React.FC = () => {
  const { resetToken } = useParams<IUrlParams>();

  return (
    <section className={commonStyles.background}>
      {resetToken ? <Password /> : <Email />}
    </section>
  );
};
