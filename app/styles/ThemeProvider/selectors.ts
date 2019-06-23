import { createSelector } from 'reselect';
import { initialState, key } from './reducer';

const all = (state: any) => state[key] || initialState;

const makeSelectTheme = () =>
  createSelector(
    all,
    state => state.theme,
  );

const makeSelectThemeName = () =>
  createSelector(
    all,
    state => state.theme.name,
  );
export { all, makeSelectTheme, makeSelectThemeName };
