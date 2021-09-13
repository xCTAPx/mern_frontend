import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks';
import { LOGOUT } from '../../store';

export const Home: React.FC = () => {
  const { user } = useTypedSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <section>
      <h1>Home Page</h1>
      <p>E-mail: {user?.email}</p>
      <p>Nickname: {user?.nickname}</p>
      <button
        onClick={() => {
          dispatch({ type: LOGOUT });
        }}>
        Logout
      </button>
    </section>
  );
};
