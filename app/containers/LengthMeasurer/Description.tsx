import React, { memo, useContext } from 'react';
import styled, { ThemeContext } from 'styles/styled-components';
import media from 'styles/media';
import IllustrationIcon from './length-measurer-illustration.svg';

interface Props {}

function Component(props: Props) {
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <Text>
        <p>
          <strong>Length Measurer </strong>is a tool for measuring a distance
          with a given{' '}
          <span style={{ color: themeContext.brand }}>
            known short distance.
          </span>
          <br />
          <br />A simple mathematical formula can calculate the distance
          forming a triangle, if{' '}
          <span style={{ color: themeContext.brand }}>two angles</span> and{' '}
          <span style={{ color: themeContext.brand }}>a side</span> of the
          triangle is known. Therefore this tool helps you to build a{' '}
          <span style={{ color: themeContext.brand }}>
            hypothetical triangle
          </span>{' '}
          to measure the length.&nbsp;
        </p>
      </Text>
      <Illustration />
      <Text>
        According to the illustration:
        <p>
          <strong>
            1) <span style={{ color: themeContext.brand }}>Known Distance</span>
            .{' '}
          </strong>
          You must enter your distance to the closest anchor.&nbsp;&nbsp;
        </p>
        <p>
          <strong>
            2)
            <span style={{ color: themeContext.brand }}>
              {' '}
              90&ordm; degrees (1st angle
            </span>
            ).
          </strong>{' '}
          You must stay perpendicular to the axis of the line from the anchor.
        </p>
        <p>
          <strong>
            3){' '}
            <span style={{ color: themeContext.brand }}>
              Calculated angle (2nd angle)
            </span>
            .
          </strong>
          &nbsp;You must use the device camera and first point it to the closest
          anchor then to the far anchor. It will automatically determine the
          angle and this will your second known angle in the equation.&nbsp;
          <br />
          <br />
          Knowing these 3 inputs the length is calculated.&nbsp;
        </p>
      </Text>
    </Wrapper>
  );
}

const Illustration = styled.img.attrs({
  src: IllustrationIcon,
})`
  display: flex;
  max-width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

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
