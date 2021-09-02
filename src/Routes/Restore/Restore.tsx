import React from 'react';
import { useParams } from 'react-router';
import { Email, Password } from './components';

interface IUrlParams {
  resetToken?: string;
}

export const Restore: React.FC = () => {
  const { resetToken } = useParams<IUrlParams>();

  return resetToken ? <Password /> : <Email />;
};
