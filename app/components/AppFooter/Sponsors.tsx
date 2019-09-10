import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import turkishSlacklineIcon from '../AppHeader/Logos/svg/turkish_slackline.svg';

interface Props {}

function Sponsors(props: Props) {
  return (
    <Wrapper>
      <span>Supported by</span>
      <LogoWrapper>
        <Logo href={'//www.slackline.org.tr'} target="_blank">
          <img style={{ height: '100%' }} src={turkishSlacklineIcon} />
        </Logo>
      </LogoWrapper>
    </Wrapper>
  );
}

const Logo = styled.a`
  display: flex;
  justify-content: flex-start;
  /* flex: none; */
  /* width: 100%; */
  height: 100%;
  margin: 0rem 0.8rem 0.8rem 0rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  /* margin-top: 1rem; */
  padding: 0rem 1rem 1rem 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100%;
  /* width: 100%; */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  & span {
    color: ${props => props.theme.textSecondary};
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
`;

export default memo(Sponsors);
