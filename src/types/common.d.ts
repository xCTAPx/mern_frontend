declare type Action<T = undefined> = {
  type: string;
} & (T extends undefined ? {} : { payload: T });

declare type ActionCreator<T = undefined> = (
  arg: T
) => Action<T>;

declare type RootState = ReturnType<
  typeof import('../store/reducers/rootReducer').rootReducer
>;
