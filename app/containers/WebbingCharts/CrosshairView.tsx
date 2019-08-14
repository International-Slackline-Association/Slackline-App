import React, { memo } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { ChartType, ISeriesData } from './interface';

interface Props {
  className?: string;
  chartType: ChartType;
  values: ISeriesData[];
}

function title(chartType: ChartType) {
  switch (chartType) {
    case 'Stretch':
      return { title: 'Stretch', caption: 'kn' };
    case 'Weight':
      return { title: 'Weight', caption: 'g/m' };
    case 'Price':
      return { title: 'Price', caption: 'euro/m' };
    case 'MBS':
      return { title: 'Max Breaking Strength', caption: 'kn' };
  }
}

function Component(props: Props) {
  const values = props.values;
  return (
    <Wrapper>
      {props.chartType === 'Stretch' ? (
        <React.Fragment>
          <span>
            Webbing: <b>{values[0].webbingName}</b>
          </span>
          <span>
            Tension: <b>{values[0].x} kn</b>
          </span>
          <span>
            Stretch: <b>{values[0].y}%</b>
          </span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span>
            Webbing: <b>{values[0].webbingName}</b>
          </span>
          <span>
            {title(props.chartType).title}: <b>{values[0].y} {title(props.chartType).caption}</b>
          </span>
        </React.Fragment>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.overlay};
  flex-direction: column;
  & span {
    white-space: nowrap;
    word-break: keep-all;
    margin: 0.2rem 0rem;
  }
`;

export const CrosshairView = memo(Component);
