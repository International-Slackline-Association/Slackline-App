import React, { memo, useState } from 'react';
import styled from '../../styles/styled-components';
import media from '../../styles/media';
import icon from './Icons/tools_icon.svg';

import { touchableOpacity } from 'styles/mixins';
import { cover } from 'polished';
import { Icon, IconType } from '../Icons/Icon';

interface Props {
  icon: IconType;
  isIconVertical?: boolean;
  title: string;
  subtitle: string;
  isAvailable: boolean;
  onItemClick(): void;
}

function Item(props: Props) {
  function onItemClick(event: any) {
    event.preventDefault();
    props.onItemClick();
  }

  const [isHoverState, setIsHoverState] = useState<boolean>();

  function handleMouseHover() {
    setIsHoverState(!isHoverState);
  }

  return (
    <Wrapper
      onClick={onItemClick}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      isAvailable={props.isAvailable}
    >
      {!props.isAvailable && (
        <NotAvailableWrapper>
          <span>Available Soon...</span>
        </NotAvailableWrapper>
      )}
      <LeftIcon vertical={props.isIconVertical} disabled={!props.isAvailable} iconType={props.icon} />
      <TitleWrapper disabled={!props.isAvailable}>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TitleWrapper>
    </Wrapper>
  );
}

const LeftIcon = styled(Icon)<{ disabled?: boolean, vertical?: boolean }>`
  display: flex;
  width: ${props => props.vertical ? '2rem' : '2rem'};
  height: ${props => props.vertical ? '3rem' : '2rem'};
  margin-top: 0.2rem;
  margin-right: 0.5rem;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

const NotAvailableWrapper = styled.div`
  ${cover()}
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${props => props.theme.overlay}; */
  & span {
    background-color: ${props => props.theme.background};
    transform: rotate(45deg);
    position: absolute;
    right: 0;
    font-size: 0.5rem;
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
