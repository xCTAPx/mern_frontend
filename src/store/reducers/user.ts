import { Reducer } from 'redux';
import {
  REGISTRATION_SUCCEED,
  LOGIN_SUCCEED,
  LOGOUT,
} from '../actions';

type UserState = IUser | null;
type UserReducer = Reducer<
  UserState,
  Action<IUserDataLoginResponse | undefined>
>;

const withPayload = (
  action: Action<IUserDataLoginResponse | undefined>
): action is Action<IUserDataLoginResponse> =>
  'payload' in action;

export const user: UserReducer = (state = null, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCEED:
      return state;
    case LOGIN_SUCCEED:
      if (!withPayload(action)) return null;

      const { user } = action.payload;

      const { email, nickname, id } = user;

      return { email, nickname, id };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
