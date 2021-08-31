type State = IUser | {};
type UserReducer = (
  state: State,
  action: IAction<IUser>
) => IUser | {};

export const user: UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_RECEIVED':
      return action.payload;
    default:
      return state;
  }
};
