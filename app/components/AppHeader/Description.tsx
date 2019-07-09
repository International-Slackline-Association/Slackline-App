import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {}

function Description(props: Props) {
  return (
    <Wrapper>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        euismod nibh eget lacus tristique faucibus. Aliquam vitae maximus nisi.
        Nam convallis sed metus sit amet luctus. Nunc dapibus justo eu neque
        finibus ullamcorper. Vestibulum dictum lacus sit amet libero placerat,
        sed molestie mauris porttitor.
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  ${media.desktop`
    display: flex;
  `};
  & span {
    font-size: 1em;
    margin: 1em 0em;
    font-weight: bold;
    text-align: left;
  }
`;

export default memo(Description);
