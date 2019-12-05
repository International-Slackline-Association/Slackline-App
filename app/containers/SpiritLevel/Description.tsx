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
            <span style={{ color: themeContext.brand }}>
              Horizontal Leveling
            </span>
            &nbsp;
          </strong>
          uses your device's camera to level your anchors.
          <br />
          <br />
        </p>
        <h3>Disclaimer</h3>
        <p>
          <strong>*</strong> It only works with device in the{' '}
          <strong>
            <span style={{ color: themeContext.brand }}>
              landscape orientation
            </span>
          </strong>{' '}
          (rotated to the left)
          <br />
          <br />
          <span>
            <span>
              <strong>*</strong>
            </span>
            &nbsp;
            <strong style={{ color: themeContext.brand }}>Optionally</strong>
          </span>
          , you can determine{' '}
          <span style={{ color: themeContext.brand }}>
            <em>
              <strong>the height difference</strong>
            </em>
          </span>{' '}
          of your anchors (<em>how off-level they are</em>); add the length of the line below to do so
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
  height: 100%;
`;
export const Description = memo(Component);
