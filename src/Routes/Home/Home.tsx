import React from 'react';
import { useActions, useTypedSelector } from '../../hooks';

export const Home: React.FC = () => {
  const { user } = useTypedSelector((state) => state);

  const { logoutAction, checkAccessAction } = useActions();

  return (
    <section>
      <h1>Home Page</h1>
      <p>E-mail: {user?.email}</p>
      <p>Nickname: {user?.nickname}</p>
      <button onClick={logoutAction}>Logout</button>
      <button onClick={checkAccessAction}>
        Check access
      </button>
    </section>
  );
};
