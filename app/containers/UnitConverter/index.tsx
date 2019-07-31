import React, { useState, useEffect } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { Icon, IconType } from 'components/Icons/Icon';
import { TextInput } from 'components/TextInput';
import { RouteComponentProps } from 'react-router';
import { MassConverter } from 'components/Converter/Mass';
import { LengthConverter } from 'components/Converter/Length';
import { ForceConverter } from 'components/Converter/Force';

interface Props extends RouteComponentProps {}

export default function UnitConverter(props: Props) {
  return (
    <AppBackgroundContainer>
      <Wrapper>
        <Header>
          <HeaderIcon iconType="unit_converter" />
          <span>Unit Converter</span>
        </Header>
        <InputsWrapper>
          <MassConverter />
          <LengthConverter />
          <ForceConverter />
        </InputsWrapper>
      </Wrapper>
    </AppBackgroundContainer>
  );
}

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  ${media.desktop`
  `};
`;

const HeaderIcon = styled(Icon)`
  display: flex;
  flex: none;
  width: 2rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  ${media.desktop`
    margin-top: 3rem;
  `};
  & span {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.05rem;
    margin-top: 1rem;
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
