import { combineReducers, Reducer } from 'redux';
import { user } from './user';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const rootReducer: Reducer = combineReducers({
  user,
});
