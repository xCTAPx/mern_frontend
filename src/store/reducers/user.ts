import { Reducer } from 'redux';

type State = IUser | {};

export const user: Reducer<State, IAction<IUser>> = (
  state = {},
  action
) => {
  switch (action.type) {
    case 'USER_RECEIVED':
      return action.payload;
    default:
      return state;
  }
};
