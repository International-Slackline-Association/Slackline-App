import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { selectDefault } from './selectors';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled from 'styles/styled-components';
import media from 'styles/media';

const key = 'test';

const selector = createStructuredSelector({
  dflt: selectDefault(),
});

export default function InstructorCertificateExplorer() {
  const { dflt } = useSelector(selector);

  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  return (
    <AppBackgroundContainer>
      <Header>
        {/* <Icon src={icon} /> */}
      </Header>
    </AppBackgroundContainer>
  );
}

const Icon = styled.img`
  display: flex;
  flex: none;
  width: 2em;
  margin-right: 0.5em;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
    align-self: flex-start;
    flex-wrap: wrap;
    overflow-y: scroll;
    max-height: 66vh;
  `};
`;

const Header = styled.div`
  align-self: center;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2em;
  ${media.desktop`
    margin-top: 1em;
    margin-bottom: 3em;
    text-align: left;
    align-self: flex-start;
  `};
`;
