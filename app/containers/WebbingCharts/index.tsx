import React, { useState, useEffect, createRef, useRef } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled, { css } from 'styles/styled-components';
import media, { isMobile } from 'styles/media';
import { RouteComponentProps } from 'react-router';
import {
  IChartWebbing,
  IChartData,
  ChartType,
  ISeries,
  ISeriesData,
} from './interface';

import {
  XAxis,
  YAxis,
  LineMarkSeries,
  FlexibleXYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  RVTickFormat,
  XYPlot,
  XYPlotProps,
  Crosshair,
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
import {
  generateChartData,
  generateInitialChartData,
  ChartManager,
} from './chartData';
import { Legend } from './Legend';
import { generateChart } from './chartGenerator';
import { CrosshairView } from './CrosshairView';

const chartTypes: ChartType[] = ['Stretch', 'Weight', 'Price', 'MBS'];
const initialChartData = generateInitialChartData();

interface Props extends RouteComponentProps {}
export default function WebbingCharts(props: Props) {
  const [data, setData] = useState<IChartData>(initialChartData);
  const [legendStatus, setLegendStatus] = useState({
    selected: false,
    hovered: false,
  });
  const [isChartAnimated, setIsChartAnimated] = useState(true);
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(
    'Stretch',
  );
  const [crosshairValues, setCrosshairValues] = useState<ISeriesData[]>();

  useEffect(() => {
    generateChartData().then(data => {
      setIsChartAnimated(true);
      setData(data);
    });
  }, []);

  function selectChartType(type: ChartType) {
    return () => {
      setIsChartAnimated(true);
      setSelectedChartType(type);
    };
  }

  function webbingsClicked(selectedWebbings: IChartWebbing[]) {
    setIsChartAnimated(false);
    const disableDeselect = !legendStatus.selected;
    setLegendStatus({ selected: true, hovered: legendStatus.hovered });
    setData(
      ChartManager.selectOrDeselectWebbings(
        data,
        selectedWebbings,
        false,
        disableDeselect,
      ),
    );
  }

  function webbingsHovered(selectedWebbings: IChartWebbing[]) {
    setIsChartAnimated(false);
    setLegendStatus({ selected: legendStatus.selected, hovered: true });
    setData(
      ChartManager.hoverWebbings(
        data,
        selectedWebbings,
        !legendStatus.selected,
      ),
    );
  }

  function datapointSelected(webbing: IChartWebbing, index: number) {
    setData(ChartManager.selectDataPoint(data, webbing, index));
  }

  function onLegendMouseExit() {
    if (legendStatus.hovered && !legendStatus.selected) {
      resetToggles();
    }
  }

  function resetToggles() {
    setIsChartAnimated(true);
    setData(ChartManager.selectAll(data));
  }

  function resetInteractions() {
    setData(ChartManager.clearHovers(data));
  }

  const chart = generateChart(selectedChartType, data);

  function chartOnMouseLeave() {
    setCrosshairValues([]);
    resetInteractions();
    if (legendStatus.hovered && !legendStatus.selected) {
      resetToggles();
    }
  }

  function seriesNearestXYHandler(serie: ISeries, webbingIndex: number) {
    if (serie.focused) {
      const webbing = ChartManager.findWebbingAtIndex(data, webbingIndex);
      return (value: ISeriesData, { index }: { index: number }) => {
        datapointSelected(webbing, index);
        setCrosshairValues([value]);
      };
    }
    return undefined;
  }
  function seriesMouseOverHandler(index: number) {
    const webbing = ChartManager.findWebbingAtIndex(data, index);
    return () => {
      webbingsHovered([webbing]);
    };
  }

  function barMouseOverHandler(value: ISeriesData) {
    const webbing = ChartManager.findWebbingWithName(data, value.webbingName);
    webbingsHovered([webbing]);
    setCrosshairValues([value]);
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Webbing Charts</title>
        <meta name="description" content="Compare webbings with charts" />
      </Helmet>
      <AppBackgroundContainer showBackButton>
        <Wrapper>
          <Header>
            <HeaderIcon iconType="stretch_chart" />
            <span>Webbing Charts</span>
          </Header>
          <RVStyles />
          <ChartWrapper>
            {/* <ChartTypeText>Chart Type</ChartTypeText> */}
            <ChartTypeItemTextWrapper>
              {chartTypes.map((type, index) => {
                return (
                  <React.Fragment key={index}>
                    <ChartTypeItemText
                      onClick={selectChartType(type)}
                      isSelected={selectedChartType === type}
                    >
                      {type}
                    </ChartTypeItemText>
                    {index !== chartTypes.length - 1 && <Divider />}
                  </React.Fragment>
                );
              })}
            </ChartTypeItemTextWrapper>
            <ChartContainer>
              <Chart
                // xDomain={[0, chart.lineMarkSeries!.length - 3]}
                xType={selectedChartType === 'Stretch' ? 'linear' : 'ordinal'}
                onMouseLeave={chartOnMouseLeave}
                animation={isChartAnimated}
              >
                {selectedChartType !== 'Stretch' && (
                  <HorizontalGridLines tickTotal={chart.yAxisTickTotal} />
                )}
                <XAxis
                  title={chart.xAxisTitle}
                  tickSizeInner={0}
                  tickSizeOuter={8}
                  tickTotal={chart.xAxisTickTotal}
                  tickLabelAngle={chart.xAxisAngle}
                  tickPadding={chart.xAxisPadding}
                  animation={false}
                />
                <YAxis
                  title={chart.yAxisTitle}
                  tickSizeInner={0}
                  tickSizeOuter={8}
                  tickTotal={chart.yAxisTickTotal}
                  animation={isChartAnimated}
                />
                {selectedChartType === 'Stretch' ? (
                  chart.lineMarkSeries!.map((serie, index) => {
                    return (
                      <LineMarkSeries
                        sizeType="literal"
                        fillType="literal"
                        key={serie.title}
                        opacity={serie.selected ? 1 : 0.1}
                        color={serie.color}
                        curve={'curveCardinal'}
                        data={serie.data}
                        onNearestX={seriesNearestXYHandler(serie, index)}
                        onSeriesMouseOver={seriesMouseOverHandler(index)}
                      />
                    );
                  })
                ) : (
                  <VerticalBarSeries
                    colorType="literal"
                    barWidth={0.8}
                    data={chart.barSeries!.data}
                    onValueMouseOver={barMouseOverHandler}
                  />
                )}
                <Crosshair values={crosshairValues}>
                  {crosshairValues && crosshairValues[0] && (
                    <CrosshairView
                      values={crosshairValues}
                      chartType={selectedChartType}
                    />
                  )}
                </Crosshair>
              </Chart>
            </ChartContainer>
            <Legends
              onItemsHover={webbingsHovered}
              onItemsClick={webbingsClicked}
              onMouseExit={onLegendMouseExit}
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
    opacity: 0.2;
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
    height: 100%;
  `};
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  flex: 1;
  /* margin-left: -10px; */
  flex-direction: column;
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
