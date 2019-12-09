import React, { memo, useState, useEffect } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import CaretIcon from '../svg/caret.svg';
import { touchableOpacity, hideScrollBar } from 'styles/mixins';

interface Props {
  className?: string;
  title: string;
  height: number;
  isOpen?: boolean;
  toggled?(open: boolean): void;
  children: React.ReactNode;
}

function Component(props: Props) {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);

  useEffect(() => {
    setIsOpen(props.isOpen || false);
  }, [props.isOpen]);

  function toggleOpen() {
    setIsOpen(!isOpen);
    if (props.toggled) {
      props.toggled(!isOpen);
    }
  }
  return (
    <Wrapper className={props.className}>
      <TitleWrapper isOpen={isOpen} onClick={toggleOpen}>
        <Caret isOpen={isOpen} src={CaretIcon} />
        <span>{props.title}</span>
      </TitleWrapper>
      <TextArea height={props.height} isOpen={isOpen}>{props.children}</TextArea>
      {/* <Divider /> */}
    </Wrapper>
  );
}
const Divider = styled.div`
  display: flex;
  height: 1px;
  background-color: ${props => props.theme.border};
`;

const Caret = styled.img<{ isOpen: boolean }>`
  transform: ${props => props.isOpen && 'rotate(90deg)'};
`;

const TextArea = styled.div<{ isOpen: boolean, height: number }>`
  display: flex;
  max-height: ${props => (props.isOpen ? `${props.height}px` : '0px')};
  transition: ${props =>
    props.isOpen ? 'max-height 0.2s ease-in' : 'max-height 0.2s ease-out'};
  margin: 0.5rem 0 0.5rem 0;
  border-radius: 0.5rem;
  overflow: ${props => (props.isOpen ? 'scroll' : 'hidden')};
  ${hideScrollBar};
  background-color: ${props => props.theme.surfaceTransparent};
`;

const TitleWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  margin-bottom: 0.5rem;
  align-self: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${props => !props.isOpen && props.theme.surfaceTransparent};
  ${touchableOpacity}
  & span {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    font-weight: normal;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpandableInfoArea = memo(Component);
