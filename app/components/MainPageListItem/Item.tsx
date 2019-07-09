import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import icon from './Icons/tools_icon.svg';
import { touchableOpacity } from 'styles/mixins';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  onItemClick(): void;
}

function Item(props: Props) {
  function onItemClick(event: any) {
    event.preventDefault();
    props.onItemClick();
  }

  return (
    <Wrapper onClick={onItemClick}>
      <Icon src={icon} />
      <TitleWrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TitleWrapper>
    </Wrapper>
  );
}

const Subtitle = styled.span`
  font-size: 0.8em;
  text-align: left;
  color: ${props => props.theme.textSecondary};
`;

const Title = styled.span`
  font-size: 0.8em;
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

const Wrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: ${props => props.theme.text};
  ${touchableOpacity}
`;

export const MainPageItem = memo(Item);
