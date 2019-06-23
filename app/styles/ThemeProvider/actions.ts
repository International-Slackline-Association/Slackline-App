import { action } from 'typesafe-actions';
import actionTypes from './actionTypes';
import { IThemesInterface } from './themes/types';

export const changeTheme = (themenName: keyof IThemesInterface) =>
  action(actionTypes.CHANGE_THEME, themenName);
