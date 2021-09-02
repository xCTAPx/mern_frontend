import { Reducer } from 'redux';
import {
  REGISTRATION_SUCCEED,
  LOGIN_SUCCEED,
} from '../actions';

type State = IUser | {};

export const user: Reducer<State, IAction<IUser>> = (
  state = {},
  action
) => {
  switch (action.type) {
    case REGISTRATION_SUCCEED:
      return action.payload;
    case LOGIN_SUCCEED:
      const { email, nickname, id } = action.payload;
      return { email, nickname, id };
    default:
      return state;
  }
};
