import { combineReducers } from 'redux';
import actionTypes from './actionTypes';
import themes from './themes';
import { ComponentState, ComponentActions } from './types';
import { setStorageItem, getStorageItem } from '../../utils/storage';
import { IThemesInterface } from './themes/types';

export const key = 'themeProvider';

export const initialState: ComponentState = {
  theme: themes.dark,
};

export default combineReducers<ComponentState, ComponentActions>({
  theme: (state = initialState.theme, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_THEME:
        const theme = themes[action.payload];
        return theme;
      default:
        return state;
    }
  },
});
