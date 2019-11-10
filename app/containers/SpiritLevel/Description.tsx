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
          is a tool which lets you level your anchors with a camera.<br />
          <br />
          <strong>*</strong> It only works with the device in the {' '}
          <strong>
            <span style={{ color: themeContext.brand }}>
              landscape orientation
            </span>
          </strong>{' '}
          (rotated to the left)
        </p>
        <p>
          <span>
            <span>
              <strong>*</strong>
            </span>
            &nbsp;
            <strong style={{ color: themeContext.brand }}>Optionally</strong>
          </span>
          , you can find the{' '}
          <span style={{ color: themeContext.brand }}>
            <em>
              <strong>difference between anchor heights</strong>
            </em>
          </span>{' '}
          (<em>how off-level they are</em>). To do that enter the line length below
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
