import { Reducer } from 'redux';
import {
  REGISTRATION_SUCCEED,
  LOGIN_SUCCEED,
  LOGOUT,
} from '../actions';

type UserState = IUser | null;
type UserReducer = Reducer<
  UserState,
  IAction<IUserDataLoginResponse>
>;

//@ts-ignore because action payload contains IUser, but is not IUser
export const user: UserReducer = (state = null, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCEED:
      return action.payload;
    case LOGIN_SUCCEED:
      const { user, tokens } = action.payload;

      const { email, nickname, id } = user;
      const { accessToken, refreshToken } = tokens;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      return { email, nickname, id };
    case LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      return null;
    default:
      return state;
  }
};
