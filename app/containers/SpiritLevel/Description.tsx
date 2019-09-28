import React, { memo, useContext } from 'react';
import styled, { ThemeContext } from 'styles/styled-components';
import media from 'styles/media';

interface Props {}

function Component(props: Props) {
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <Text>
        <p>
          <strong>
            <span style={{ color: themeContext.brand }}>Spirit Level</span>
            &nbsp;
          </strong>
          is a tool to level your anchors equally using your camera. <br />
          <br />
          <strong>*</strong> It only works the device is in{' '}
          <strong>
            <span style={{ color: themeContext.brand }}>
              landscape orientation
            </span>
          </strong>{' '}
          (rotated to left)
        </p>
        <p>
          <span>
            <span>
              <strong>*</strong>
            </span>
            &nbsp;
            <strong style={{ color: themeContext.brand }}>Optionally</strong>
          </span>
          , to calculate the{' '}
          <span style={{ color: themeContext.brand }}>
            <em>
              <strong>height difference</strong>
            </em>
          </span>{' '}
          of the far anchor(<em>off-level</em>) enter the length below
        </p>
      </Text>
    </Wrapper>
  );
}
const Text = styled.span`
  font-size: 0.8rem;
  font-weight: normal;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;
export const Description = memo(Component);
