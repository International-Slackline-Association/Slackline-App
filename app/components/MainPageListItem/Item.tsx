import React, { memo, useState } from 'react';
import { isMobile, isIOS } from 'react-device-detect';
import styled, { css } from '../../styles/styled-components';

import { touchableOpacity } from 'styles/mixins';
import { cover } from 'polished';
import { Icon, IconType } from '../Icons/Icon';
import { Utils } from 'utils/index';

interface Props {
  icon: IconType;
  isIconVertical?: boolean;
  title: string;
  subtitle: string;
  notAvailableStatus?: string;
  isMobileOnly?: boolean;
  restrictedPlatform?: 'ios' | 'android' | 'iosPWA' | 'androidPWA';
  onItemClick(isDisabled?: boolean): void;
}

function Item(props: Props) {
  function onItemClick(event: any) {
    event.preventDefault();
    props.onItemClick(isRestrictedIniOSPWA || !isAvailable);
  }

  const [isHoverState, setIsHoverState] = useState<boolean>();

  function handleMouseHover() {
    setIsHoverState(!isHoverState);
  }
  const isAvailable = props.notAvailableStatus === undefined;
  const isRestrictedIniOSPWA =
    props.restrictedPlatform === 'iosPWA' &&
    isIOS &&
    Utils.isInStandaloneMode();
  return (
    <Wrapper
      onClick={onItemClick}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      isAvailable={isAvailable}
    >
      {(!isAvailable || props.isMobileOnly) && (
        <NotAvailableWrapper>
          <span>
            {(props.isMobileOnly && !isMobile && 'Mobile Only') ||
              props.notAvailableStatus}
          </span>
        </NotAvailableWrapper>
      )}
      {isRestrictedIniOSPWA && (
        <NotAvailableWrapper centerText={true}>
          <span>Only available in Safari browser.</span>
        </NotAvailableWrapper>
      )}
      <LeftIcon
        vertical={props.isIconVertical}
        disabled={!isAvailable || isRestrictedIniOSPWA}
        iconType={props.icon}
      />
      <TitleWrapper disabled={!isAvailable || isRestrictedIniOSPWA}>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TitleWrapper>
    </Wrapper>
  );
}

const LeftIcon = styled(Icon)<{ disabled?: boolean; vertical?: boolean }>`
  display: flex;
  width: ${props => (props.vertical ? '2rem' : '2rem')};
  height: ${props => (props.vertical ? '3rem' : '2rem')};
  margin-top: 0.2rem;
  margin-right: 0.5rem;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

const NotAvailableWrapper = styled.div<{ centerText?: boolean }>`
  ${cover()}
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    background-color: ${props => props.theme.background};
    ${props =>
      props.centerText
        ? css`
            font-size: 0.8rem;
          `
        : css`
            transform: rotate(45deg);
            position: absolute;
            right: 0;
            font-size: 0.5rem;
          `}
  }
`;

const Subtitle = styled.span`
  font-size: 0.7rem;
  text-align: left;
  color: ${props => props.theme.textSecondary};
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const TitleWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem 0.2rem 0.2rem;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

const Wrapper = styled.a<{ isAvailable: boolean }>`
  display: flex;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.text};
  margin: 1rem 0rem;
  ${props => (props.isAvailable ? touchableOpacity : '')}
`;

export const MainPageItem = memo(Item);
