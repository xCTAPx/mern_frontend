import { useDispatch } from 'react-redux';
import {
  ActionCreatorsMapObject,
  bindActionCreators,
} from 'redux';
import { actionCreators } from '../store';

export const useActions = (): ActionCreatorsMapObject => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
