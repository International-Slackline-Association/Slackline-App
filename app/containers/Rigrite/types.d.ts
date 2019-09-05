import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface State {
  dflt: string;
}
/* --- ACTIONS --- */
type Actions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = State;
type ContainerActions = Actions;

export { RootState, ContainerState, ContainerActions };
