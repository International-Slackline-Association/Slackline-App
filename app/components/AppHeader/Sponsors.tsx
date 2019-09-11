import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import turkishSlacklineIcon from '../Logos/svg/turkish_slackline.svg';
import swissSlacklineIcon from '../Logos/svg/swiss_slackline.svg';

interface Props {}

function Sponsors(props: Props) {
  return (
    <Wrapper>
      <span>Supported by</span>
      <LogoWrapper>
        <Logo
          style={{ marginRight: '0rem' }}
          href={'//www.slackline.org.tr'}
          target="_blank"
        >
          <img
            style={{ height: '100%', width: '100%' }}
            src={turkishSlacklineIcon}
          />
        </Logo>
        <Logo href={'//www.swiss-slackline.ch'} target="_blank">
          <img
            style={{ height: '100%', width: '100%' }}
            src={swissSlacklineIcon}
          />
        </Logo>
      </LogoWrapper>
    </Wrapper>
  );
}

const Logo = styled.a`
  display: flex;
  align-self: center;
  width: 25%;
  height: 50%;
  margin: 0rem 0.8rem 0.8rem 0rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
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
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
`;

export default memo(Sponsors);
