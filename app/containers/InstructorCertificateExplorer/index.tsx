import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { selectDefault } from './selectors';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { Icon } from 'components/Icons/Icon';
import { TextInput } from 'components/TextInput';
import { LoadableButton } from 'components/LoadableButton';

const key = 'test';

const selector = createStructuredSelector({
  dflt: selectDefault(),
});

export default function InstructorCertificateExplorer() {
  const { dflt } = useSelector(selector);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>();

  function updateValue(value: string) {
    setInputValue(value);
  }

  useInjectReducer({ key: key, reducer: reducer });
  return (
    <AppBackgroundContainer hideFooter>
      <Wrapper>
        <Header>
          <HeaderIcon iconType="instructor_certificate" />
          <span>Instructor Certificate Explorer</span>
        </Header>
        <TextInput
          label="Type the ID of the instructor"
          onChange={updateValue}
        />
        <CustomLoadableButton isLoading={false}>CHECK</CustomLoadableButton>
        <Divider />
        <ResultText>ABC</ResultText>
      </Wrapper>
    </AppBackgroundContainer>
  );
}

const ResultText = styled.span``;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 4em;
  background-color: ${props => props.theme.border};
  ${media.desktop`
    height: 1px;
  `};
`;
const CustomLoadableButton = styled(LoadableButton)`
  margin-top: 4em;
  margin-bottom: 4em;
  font-size: 0.8em;
  border-radius: 2em;
`;

const HeaderIcon = styled(Icon)`
  display: flex;
  flex: none;
  width: 3em;
  height: 3em;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4em;
  ${media.desktop`
    margin-top: 3em;
  `};
  & span {
    /* text-transform: uppercase; */
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.05em;
    margin-top: 1em;
    ${media.desktop`
      font-size: 1.5em;
  `};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  ${media.desktop`
  `};
`;
