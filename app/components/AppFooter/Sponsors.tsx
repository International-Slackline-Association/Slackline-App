import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import turkishSlacklineIcon from '../Logos/svg/turkish_slackline.svg';
import swissSlacklineIcon from '../Logos/svg/swiss_slackline.svg';
import { touchableOpacity } from 'styles/mixins';

interface Props {}

function Sponsors(props: Props) {
  return (
    <Wrapper>
      <SupportedByText>Supported by</SupportedByText>
      <LogoWrapper>
        <Logo href={'//www.slackline.org.tr'} target="_blank">
          <img style={{ height: '100%' }} src={turkishSlacklineIcon} />
        </Logo>
        <Logo href={'http://www.swiss-slackline.ch'} target="_blank">
          <img style={{ height: '100%' }} src={swissSlacklineIcon} />
        </Logo>
      </LogoWrapper>
      <AuthorText>
        Designed & Developed by{' '}
        <a href={'//github.com/Can-Sahin'} target="_blank">
          Can Sahin
        </a>{' '}
        |{' '}
        <a
          href={
            '//github.com/International-Slackline-Association/Slackline-App'
          }
          target="_blank"
        >
          Open Source
        </a>
      </AuthorText>{' '}
    </Wrapper>
  );
}

const AuthorText = styled.span`
  font-size: 0.6rem;
  margin: 0.5rem 0rem;

  & a {
    color: ${props => props.theme.textSecondary};
    text-decoration: underline;
    ${touchableOpacity}
  }
`;

const SupportedByText = styled.span`
  font-size: 0.9rem;
  margin: 0.5rem 0rem 0.5rem 0rem;
`;

const Logo = styled.a`
  display: flex;
  justify-content: flex-start;
  /* flex: none; */
  /* width: 100%; */
  height: 3.5rem;
  margin: 0rem 1rem 0rem 0rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem 0rem 0rem 0rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  & span {
    color: ${props => props.theme.textSecondary};
  }
`;

export default memo(Sponsors);
