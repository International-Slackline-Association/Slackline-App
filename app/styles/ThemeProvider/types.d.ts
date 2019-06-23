import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { IThemeInterface } from './themes/types';

export interface ComponentState {
  readonly theme: IThemeInterface;
}

export type ComponentActions = ActionType<typeof actions>;
