import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const redirectTo = (path: string): void => {
  history.push(path);
};
