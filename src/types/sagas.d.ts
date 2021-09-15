type ForkEffect = import('redux-saga/effects').ForkEffect;
type PutEffect = import('redux-saga/effects').PutEffect;
type CallEffect = import('redux-saga/effects').CallEffect;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type SpawnEffect = (...args: any[]) => void;

declare type WatchAuth = Generator<
  ForkEffect<void>,
  void,
  void
>;

declare type SagaWorker<T> = Generator<
  | CallEffect<AxiosResponse<T>>
  | ForkEffect<AxiosResponse<T>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;
