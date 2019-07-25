import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

export const selectDefault = () =>
  createSelector(selectDomain, substate => {
    return substate;
  });

