import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { selectDefault } from './selectors';

const key = 'test';

const selector = createStructuredSelector({
  dflt: selectDefault(),
});

export default function HomePage() {
  const { dflt } = useSelector(selector);

  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
