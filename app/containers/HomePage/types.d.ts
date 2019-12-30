import { ActionType } from 'typesafe-actions';
import { ApplicationRootState } from 'types';
import { IconType } from 'components/Icons/Icon';

export interface MainPageSection {
  title: string;
  items: MainPageSectionItem[];
}
export interface MainPageSectionItem {
  title: string;
  subtitle: string;
  icon: IconType;
  path: string;
  notAvailableStatus?: string;
  isIconVertical?: boolean;
  isMobileOnly?: boolean;
  restrictedPlatform?: 'ios' | 'android' | 'iosPWA' | 'androidPWA';
}
/* --- STATE --- */
interface State {
  dflt: string;
}
/* --- ACTIONS --- */

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = State;

export { RootState, ContainerState };
