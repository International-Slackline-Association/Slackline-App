import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { IconType } from 'components/Icons/Icon';

export interface MainPageSection {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
    icon: IconType;
    path: string;
    isAvailable: boolean;
  }>;
}
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
