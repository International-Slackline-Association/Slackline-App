import * as React from 'react';
import { useStore } from 'react-redux';

import getInjectors from './reducerInjectors';
import { InjectReducerParams, LifeStore } from 'types';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */

const useInjectReducer = ({ key, reducer }: InjectReducerParams) => {
  const store = useStore() as LifeStore;
  React.useEffect(() => {
    getInjectors(store).injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
