import React, { useState, useEffect, createRef, useRef } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled, { css } from 'styles/styled-components';
import media, { isMobile } from 'styles/media';
import { RouteComponentProps } from 'react-router';
import { ISeries } from './interface';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  LineSeriesCanvas,
  LineMarkSeries,
  VerticalGridLines,
  DiscreteColorLegend,
  MarkSeries,
  FlexibleWidthXYPlot,
  FlexibleXYPlot,
  FlexibleHeightXYPlot,
} from 'react-vis';
import RVStyles from 'react-vis-styles';
import { Header, HeaderIcon } from './Header';
import { useWindowSize } from './windowSize';
import {
  ChartTypeItemTextWrapper,
  ChartTypeText,
  ChartTypeItemText,
  Divider,
} from './ChartType';
import { Helmet } from 'react-helmet';
import { chartStrechRates, chartWeightRates, chartPriceRates } from './chartData';

type ChartType = 'Stretch' | 'Weight' | 'Price' | 'MBS';
const chartTypes: ChartType[] = ['Stretch', 'Weight', 'Price', 'MBS'];

interface Props extends RouteComponentProps {}
export default function WebbingComparison(props: Props) {
  const size = useWindowSize();
  const [selectedChartType, setSelectedChartType] = useState(0);

  const strechValues = chartStrechRates();
  const weightValues = chartWeightRates();
  const priceValues = chartPriceRates();

  const [series, setSeries] = useState<ISeries>(strechValues);
  console.log(series);

  function selectChartType(index: number) {
    return evt => {
      setSelectedChartType(index);
      switch (index) {
        case 0:
          setSeries(strechValues);
          break;
        case 1:
          setSeries(weightValues);
          break;
        case 2:
          setSeries(priceValues);
          break;
        default:
          break;
      }
    };
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Webbing Comparison</title>
        <meta name="description" content="Compare webbings with charts" />
      </Helmet>
      <AppBackgroundContainer showBackButton>
        <Wrapper>
          <Header>
            <HeaderIcon iconType="stretch_chart" />
            <span>Webbing Comparison</span>
          </Header>
          <RVStyles />
          <ChartWrapper>
            <ChartTypeText>Chart Type</ChartTypeText>
            <ChartTypeItemTextWrapper>
              {chartTypes.map((type, index) => {
                return (
                  <React.Fragment key={index}>
                    <ChartTypeItemText
                      onClick={selectChartType(index)}
                      isSelected={selectedChartType === index}
                    >
                      {type}
                    </ChartTypeItemText>
                    {index !== chartTypes.length - 1 && <Divider />}
                  </React.Fragment>
                );
              })}
            </ChartTypeItemTextWrapper>
            <ChartContainer>
              <Chart animation>
                <HorizontalGridLines />
                <VerticalGridLines />
                {series.map(serie => {
                  return (
                    <LineMarkSeries
                      strokeStyle={'dashed'}
                      size={4}
                      curve={'curveCardinal'}
                      key={serie.title}
                      data={serie.data}
                    />
                  );
                })}
                <XAxis animation />
                <YAxis animation />
              </Chart>
            </ChartContainer>

            <Legends
              onItemClick={undefined}
              orientation={isMobile() ? 'horizontal' : 'vertical'}
              items={series}
            />
          </ChartWrapper>
        </Wrapper>
      </AppBackgroundContainer>
    </React.Fragment>
  );
}

const Chart = styled(FlexibleXYPlot)`
  .rv-xy-plot__grid-lines__line {
    stroke: ${props => props.theme.border};
  }
  display: flex;
  /* .rv-xy-plot__series--line {
    stroke: ${props => props.theme.brand} !important;
  } */
`;

const Legends = styled(DiscreteColorLegend)`
  margin: 1rem;
  .rv-discrete-color-legend-item {
    display: flex;
    align-items: center;
  }
  .rv-discrete-color-legend-item__title {
    word-break: keep-all;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  flex: 1;
  margin-left: -10px;
  ${media.desktop`
    width: auto;
    height: 30rem;

  `};
  .rv-discrete-color-legend {
    overflow: unset;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: flex-start;
  width: 100%;
  overflow: scroll;
  background-color: ${props => props.theme.surface};
  ${media.desktop`
    flex-direction: row;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 100%;
  flex: 1;
  ${media.desktop`
  `};
`;
