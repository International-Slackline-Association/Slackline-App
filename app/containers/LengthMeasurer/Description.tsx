import React, { memo, useContext } from 'react';
import styled, { ThemeContext, css } from 'styles/styled-components';
import media from 'styles/media';
import IllustrationIcon1 from './length-measurer-illustration1.svg';
import IllustrationIcon2 from './length-measurer-illustration2.svg';
import IllustrationIcon3 from './length-measurer-illustration3.svg';

interface Props {}

function Component(props: Props) {
  return (
    <Wrapper>
      <Text>
        <p>
          <strong>Length Measurer </strong> is a tool for measuring horizontal
          length of a line with a{' '}
          <HighlightedText>known short distance.</HighlightedText>
          <br />
        </p>
        <p>
          <strong>STEP by STEP instructions</strong>
        </p>
      </Text>
      <IllustrationWrapper>
        <Illustration1 />
        <span>Stand on the close anchor and mark the far anchor</span>
      </IllustrationWrapper>
      <IllustrationWrapper>
        <Illustration2 />
        <span>Stand on the measured point and mark the close anchor</span>
      </IllustrationWrapper>
      <IllustrationWrapper>
        <Illustration3 />
        <span>
          Start measuring the length. The angles will be calculated based on
          your input to form the triangle
        </span>
      </IllustrationWrapper>
      <Text>
        <h3>Tips</h3>
        <p>
          <strong>-</strong> Accuracy increases as the{' '}
          <HighlightedText>known distance </HighlightedText>increases
        </p>
        <p>
          <strong>-</strong> You can achieve higher accuracy when you are 90°
          degrees (perpendicular to the line axis) as shown in the illustrations
        </p>
        <h3>Assumptions</h3>
        <p>
          <strong>1 -</strong> Your known length must be{' '}
          <HighlightedText>very accurate</HighlightedText>. The calculation
          margins are very small, due to this even 10cm errors can cause an
          incorrect measurement
        </p>
        <p>
          <strong>2-</strong> Your known length should be{' '}
          <HighlightedText>at least 15%</HighlightedText> of the gap length you
          are measuring for accurate measurement.
        </p>
      </Text>
    </Wrapper>
  );
}

const IllustrationCss = css`
  /* display: flex; */
  width: 100%;
  height: 8rem;
  /* margin-right: 1rem; */
`;

const Illustration1 = styled.img.attrs({
  src: IllustrationIcon1,
})`
  ${IllustrationCss}
`;
const Illustration2 = styled.img.attrs({
  src: IllustrationIcon2,
})`
  ${IllustrationCss}
`;

const Illustration3 = styled.img.attrs({
  src: IllustrationIcon3,
})`
  ${IllustrationCss}
`;

const HighlightedText = styled.span`
  color: ${props => props.theme.brand};
`;

const IllustrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* position: relative; */
  /* width: 100%; */
  /* height: 10rem; */
  margin: 1rem 0rem;
  /* padding-left: 25%; */
  & span {
    /* margin-left: 66%; */
    margin-top: 1rem;
    word-break: keep-all;
    font-size: 0.7rem;
  }
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  font-size: 0.8rem;
  font-weight: normal;

  & h3 {
    align-self: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;
export const Description = memo(Component);