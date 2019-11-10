import React, { memo, useContext } from 'react';
import styled, { ThemeContext } from 'styles/styled-components';
import media from 'styles/media';
import IllustrationIcon1 from './tension_illustration.svg';

interface Props {}

function Component(props: Props) {
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <Text>
        <p>
          <strong>Tension Calculator </strong>is a tool for calculating the
          tension of the line using device's{' '}
          <span style={{ color: themeContext.brand }}>angle sensor</span>. It
          uses a mathematical formula which needs:&nbsp;
        </p>
        <p>
          <br />
          <strong>1)</strong>{' '}
          <span style={{ color: themeContext.brand }}>
            <em>Weight</em>
          </span>{' '}
          of the person standing still in the middle of the line
        </p>
        <p>
          <strong>2)</strong>{' '}
          <span style={{ color: themeContext.brand }}>
            <em>
              <span style={{ color: themeContext.brand }}>Angle</span>
            </em>
          </span>{' '}
          of the webbing (determined by your device)
          <br />
          <br />
          Simply enter the weight of the person in the middle (include line
          weight for better accuracy on longer lines)
          <br />
          <br />
        </p>
        <h3>Assumptions:</h3>
        <p>
          <br />
          <strong>1 -</strong> Your device must lay completely flat on the
          webbing (see the illustration). You might have to remove your phone case
          for an accurate measurement.&nbsp;
        </p>
        <p>
          <strong>2-</strong> Make sure your device is laying face up, with the
          bottom side pointing to the slackliner in the middle of the
          line.&nbsp;
        </p>
        <p>
          <strong>3 -</strong> Your device is held completly flat face upwards
          from the ground.
        </p>
      </Text>
      <Illustration1 />
    </Wrapper>
  );
}
const Text = styled.span`
  font-size: 0.8rem;
  font-weight: normal;
`;
const Illustration1 = styled.img.attrs({
  src: IllustrationIcon1,
})`
  display: flex;
  max-width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;
export const Description = memo(Component);
