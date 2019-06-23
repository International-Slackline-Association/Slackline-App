import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  dflt: '',
};

export default combineReducers<ContainerState, ContainerActions>({
  dflt: (state = initialState.dflt, action) => {
    switch (action.type) {
      case ActionTypes.dflt:
        return state;
    }
    return state;
  },
});
