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
        <Logo
          // style={{ marginRight: '0rem' }}
          href={'//www.slackline.org.tr'}
          target="_blank"
        >
          <img style={{ height: '100%' }} src={turkishSlacklineIcon} />
        </Logo>
        <Logo href={'//www.swiss-slackline.ch'} target="_blank">
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
      </AuthorText>
    </Wrapper>
  );
}

const AuthorText = styled.span`
  font-size: 0.6rem;
  & a {
    color: ${props => props.theme.textSecondary};
    text-decoration: underline;
    ${touchableOpacity}
  }
`;

const SupportedByText = styled.span`
  font-size: 1rem;
  margin: 0.5rem 0rem;
`;

const Logo = styled.a`
  display: flex;
  height: 3rem;
  margin: 1rem 1rem 1rem 0rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Wrapper = styled.div`
  display: none;
  align-self: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 1rem;
  ${media.desktop`
    display: flex;
  `};
  & span {
    color: ${props => props.theme.textSecondary};
  }
`;

export default memo(Sponsors);
