declare interface IAction<T = {}> {
  type: string;
  payload: T;
}

declare type RootState = ReturnType<
  typeof import('../store/reducers/rootReducer').rootReducer
>;
