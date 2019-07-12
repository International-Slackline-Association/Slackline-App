import React, { memo, useState } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import icon from './Icons/tools_icon.svg';
import { touchableOpacity } from 'styles/mixins';
import { cover } from 'polished';

interface Props {
  icon: string;
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
      <Icon src={icon} />
      {isHoverState && !props.isAvailable && (
        <NotAvailableWrapper>
          <span>COMING SOON</span>
        </NotAvailableWrapper>
      )}
      <TitleWrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TitleWrapper>
    </Wrapper>
  );
}

const NotAvailableWrapper = styled.div`
  ${cover()}
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.overlay};
  & span {
    display: flex;
    align-self: center;
  }
`;

const Subtitle = styled.span`
  font-size: 0.6em;
  text-align: left;
  color: ${props => props.theme.textSecondary};
`;

const Title = styled.span`
  font-size: 0.7em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0.5em;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
`;

const Icon = styled.img`
  display: flex;
  flex: none;
  width: 2em;
  margin-right: 0.5em;
`;

const Wrapper = styled.a<{ isAvailable: boolean }>`
  display: flex;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.text};
  margin: 1em 0em;
  ${props => (props.isAvailable ? touchableOpacity : '')}
`;

export const MainPageItem = memo(Item);
