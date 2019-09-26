import React, { memo, useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styles/styled-components';
import CancelIcon from 'components/svg/cancel.svg';
import { touchableOpacity, elevatedShadow } from 'styles/mixins';
import IllustrationIcon2 from './tension_illustration2.svg';
import { ProgressBar } from 'components/LoadingBar';
import { Button } from 'components/Button';
import { LoadingIndicator, Spinner } from 'components/LoadingIndicator';
import { useMeasurement } from './useMeasurement';
import { cover, mix } from 'polished';

interface Props {
  weight: number;
  closeClicked(): void;
}
let measuredTensionValues: number[] = [];

const measuringSampleCount = 10;

function Component(props: Props) {
  const { failed, tension, tilt } = useMeasurement(props.weight);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    startMeasuring();
  }, []);

  if (failed) {
    alert(`Cannot access device's motion sensors `);
  }

  if (
    isMeasuring &&
    tension &&
    isGammaValid() &&
    measuredTensionValues.length < measuringSampleCount
  ) {
    measuredTensionValues.push(tension);
  }

  if (isMeasuring && measuredTensionValues.length >= measuringSampleCount) {
    stopMeasuring();
  }

  const averageTension =
    measuredTensionValues.reduce((a, b) => a + b, 0) /
    (measuredTensionValues.length || 1);

  let circleColor = themeContext.brand;
  if (tilt) {
    const weight = (Math.abs(tilt) * 100) / 45 / 100;
    circleColor = mix(weight, themeContext.red, themeContext.brand);
  }

  function isGammaValid() {
    return tilt && (tilt < 0.3 && tilt > -0.3);
  }

  function startMeasuring() {
    measuredTensionValues = [];
    setIsMeasuring(true);
  }

  function stopMeasuring() {
    setIsMeasuring(false);
  }

  function measureAgainClicked() {
    startMeasuring();
  }
  return (
    <Wrapper>
      <CloseButton onClick={props.closeClicked} />
      <IllustrationWrapper>
        <Illustration2
          style={{
            transform: `perspective(300px) rotateY(${tilt || 0}deg)`,
          }}
        />
        <Circle
          style={{
            background: `radial-gradient(circle at 0.5rem 0.5rem, ${
              themeContext.text
            }, ${circleColor})`,
            marginRight: (tilt && tilt * 2) || 0,
          }}
        />
      </IllustrationWrapper>
      <Text>
        Now lean your device completely on the webbing and keep the ball
        centered
      </Text>
      {isMeasuring ? (
        <MeasuringProgressWrapper>
          <LoadingTextWrapper>
            <span>Measuring</span>
            <Loading />
          </LoadingTextWrapper>
          <Progress
            percent={
              (measuredTensionValues.length * 100) / measuringSampleCount
            }
          />
        </MeasuringProgressWrapper>
      ) : (
        averageTension > 0 && (
          <ResultsWrapper>
            <span>Tension</span>
            <span className={'big'}>{averageTension.toFixed(2)} KN</span>
            <CustomButton onClick={measureAgainClicked}>
              Measure Again
            </CustomButton>
          </ResultsWrapper>
        )
      )}
    </Wrapper>
  );
}
const Circle = styled.div`
  display: block;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  margin: 0;
`;

const IllustrationWrapper = styled.div`
  position: relative;
  display: flex;
  height: 50%;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
`;

const LoadingTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Loading = styled(Spinner)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.3rem;
`;

const CustomButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 2rem;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  & span {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  .big {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

const MeasuringProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  & span {
    font-size: 0.8rem;
  }
`;
const Progress = styled(ProgressBar)`
  margin-top: 0.5rem;
  width: 7rem;
  height: 1rem;
`;
const CloseButton = styled.img.attrs({ src: CancelIcon })`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1rem;
  ${touchableOpacity}
`;

const Text = styled.span`
  align-self: center;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Illustration2 = styled.img.attrs({
  src: IllustrationIcon2,
})`
  position: absolute;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 80%;
  width: 80%;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: ${props => props.theme.surface};
  padding: 1rem;
  ${elevatedShadow};
`;

export const Measure = memo(Component);
