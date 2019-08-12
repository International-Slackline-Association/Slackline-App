import React, { useState, useEffect, createRef, useRef } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled, { css } from 'styles/styled-components';
import media, { isMobile } from 'styles/media';
import { RouteComponentProps } from 'react-router';
import { ISeries, IChartWebbing, IChartBrand, IChartData } from './interface';

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
  Hint,
} from 'react-vis';
import RVStyles from 'react-vis-styles';
import { Header, HeaderIcon } from './Header';
import {
  ChartTypeItemTextWrapper,
  ChartTypeText,
  ChartTypeItemText,
  Divider,
} from './ChartType';
import { Helmet } from 'react-helmet';
import { stretchSeries, generateChartData } from './chartData';
import { Legend } from './Legend';
import { IWebbing } from './data';

type ChartType = 'Stretch' | 'Weight' | 'Price' | 'MBS';
const chartTypes: ChartType[] = ['Stretch', 'Weight', 'Price', 'MBS'];

interface Props extends RouteComponentProps {}
export default function WebbingComparison(props: Props) {
  const [selectedChartType, setSelectedChartType] = useState(0);
  const [data, setData] = useState(generateChartData());

  const stretchSeriesData = stretchSeries(data);
  // const weightValues = chartWeightRates();
  // const priceValues = chartPriceRates();

  const [series, setSeries] = useState<ISeries>(stretchSeriesData);
  function selectChartType(index: number) {
    return evt => {
      setSelectedChartType(index);
      switch (index) {
        case 0:
          setSeries(stretchSeriesData);
          break;
        // case 1:
        //   setSeries(weightValues);
        //   break;
        // case 2:
        //   setSeries(priceValues);
        //   break;
        default:
          break;
      }
    };
  }

  function webbingClicked(selectedWebbing: IChartWebbing) {
    const newData: IChartData = {
      brands: data.brands.map(b => {
        const brand: IChartBrand = {
          ...b,
          webbings: b.webbings.map(w => {
            const webbing: IChartWebbing = {
              ...w,
              disabled: selectedWebbing !== w,
            };
            return webbing;
          }),
        };
        return brand;
      }),
    };
    setData(newData);
    setSeries(stretchSeries(newData));
  }

  function brandClicked(brand: IChartBrand) {}

  function setHint(value) {}
  function removeHint() {
    console.log('remove');
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
                      key={JSON.stringify(serie.data)}
                      opacity={serie.disabled ? 0.2 : 1}
                      color={serie.color}
                      strokeStyle={'solid'}
                      size={3}
                      curve={'curveCardinal'}
                      data={serie.data}
                      onValueMouseOver={setHint}
                      onValueMouseOut={removeHint}
                    />
                  );
                })}

                <XAxis title={'kn'} />
                <YAxis />
              </Chart>
            </ChartContainer>

            <Legends
              onItemClick={webbingClicked}
              onSectionClick={brandClicked}
              data={data}
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

const Legends = styled(Legend)`
  margin: 0rem 1rem;
  width: 100%;
  ${media.desktop`
    width: auto;
    height: 30rem;
  `};
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
