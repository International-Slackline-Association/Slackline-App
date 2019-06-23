import * as React from 'react';
import { useStore } from 'react-redux';

import getInjectors from './sagaInjectors';
import { InjectSagaParams, LifeStore } from 'types';

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {string} key A key of the saga
 * @param {function} saga A root saga that will be injected
 * @param {string} [mode] By default (constants.RESTART_ON_REMOUNT) the saga will be started on component mount and
 * cancelled with `task.cancel()` on component un-mount for improved performance. Another two options:
 *   - constants.DAEMON—starts the saga on component mount and never cancels it or starts again,
 *   - constants.ONCE_TILL_UNMOUNT—behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */

const useInjectSaga = ({ key, saga, mode }: InjectSagaParams) => {
  const store = useStore() as LifeStore;
  React.useEffect(() => {
    const injectors = getInjectors(store);
    injectors.injectSaga(key, { saga: saga, mode: mode });

    return () => {
      injectors.ejectSaga(key);
    };
  }, []);
};

export { useInjectSaga };
