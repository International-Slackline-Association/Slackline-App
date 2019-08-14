import React, { memo } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { IChartData, IChartWebbing } from './interface';
import { touchableOpacity } from 'styles/mixins';
import { rawData } from './data';

interface Props {
  className?: string;
  data: IChartData;
  onItemsHover(webbings: IChartWebbing[]): void;
  onItemsClick(webbings: IChartWebbing[]): void;
  onMouseExit(): void;
}
interface GroupedWebbings {
  brands: IBrand[];
}

interface IBrand {
  name: string;
  selected: boolean;
  webbings: IChartWebbing[];
}
function isBrandSelected(data: IChartData, brandName: string) {
  let result = true;
  for (const webbing of data.webbings) {
    if (webbing.brandName === brandName) {
      result = result && webbing.selected;
    }
  }
  return result;
}

function allWebbingsOfBrand(data: IChartData, brandName: string) {
  const webbings: IChartWebbing[] = [];
  for (const webbing of data.webbings) {
    if (webbing.brandName === brandName) {
      webbings.push(webbing);
    }
  }
  return webbings;
}

function findOriginalIndex(webbing: IChartWebbing): number {
  const originalData = rawData();
  let index = 0;
  for (const b of originalData.brands) {
    for (const w of b.webbings) {
      if (webbing.name === w.name) {
        return index;
      }
      index++;
    }
  }
  return -1;
}

function groupByBrand(data: IChartData): GroupedWebbings {
  const brandsDict: { [key: string]: IBrand } = {};
  // sort webbings by original raw data indexes
  data.webbings.sort((a, b) =>
    findOriginalIndex(a) < findOriginalIndex(b) ? -1 : 1,
  );
  for (const webbing of data.webbings) {
    let brand = brandsDict[webbing.brandName];
    if (!brand) {
      brand = {
        webbings: [],
        name: webbing.brandName,
        selected: isBrandSelected(data, webbing.brandName),
      };
    }
    brand.webbings.push(webbing);
    brandsDict[webbing.brandName] = brand;
  }

  const brands: IBrand[] = [];
  // tslint:disable-next-line: forin
  for (const key in brandsDict) {
    brands.push(brandsDict[key]);
  }
  return { brands: brands };
}

function Component(props: Props) {
  const data = groupByBrand(props.data);

  function onItemClick(item: IChartWebbing) {
    return () => {
      props.onItemsClick([item]);
    };
  }

  function onSectionClick(brand: IBrand) {
    return () => {
      props.onItemsClick(allWebbingsOfBrand(props.data, brand.name));
    };
  }

  function onItemHover(item: IChartWebbing) {
    return () => {
      props.onItemsHover([item]);
    };
  }

  function onSectionHover(brand: IBrand) {
    return () => {
      props.onItemsHover(allWebbingsOfBrand(props.data, brand.name));
    };
  }

  function onMouseExit() {
    return () => {
      props.onMouseExit();
    };
  }

  return (
    <Wrapper className={props.className} onMouseLeave={onMouseExit()}>
      {data.brands.map(brand => {
        return (
          <Section key={brand.name}>
            <SectionTitle
              onClick={onSectionClick(brand)}
              onMouseOver={onSectionHover(brand)}
              style={{ opacity: brand.selected ? 1 : 0.2 }}
            >
              {brand.name}
            </SectionTitle>
            <SectionItemsWrapper>
              {brand.webbings.map(webbing => {
                return (
                  <ItemWrapper
                    key={webbing.name}
                    onClick={onItemClick(webbing)}
                    onMouseOver={onItemHover(webbing)}
                    style={{ opacity: webbing.selected ? 1 : 0.2 }}
                  >
                    <ColorRectange
                      style={{
                        backgroundColor: webbing.colorCode,
                      }}
                    />
                    <Item>{webbing.name}</Item>
                  </ItemWrapper>
                );
              })}
            </SectionItemsWrapper>
          </Section>
        );
      })}
    </Wrapper>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.3rem;
  ${media.desktop`
    flex-direction: column;
    margin: 0.5rem 0.5rem;
  `}
`;
const SectionTitle = styled.span`
  display: flex;
  margin: 0rem 0rem;
  align-self: center;
  /* text-decoration: underline; */
  word-break: keep-all;
  ${touchableOpacity}
  font-size: 0.7rem;
  ${media.desktop`
    align-self: flex-start;
    margin: 0rem 0rem;
  `}
`;
const SectionItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${media.desktop`
    flex-direction: column;
    margin: 0rem 0rem;
  `}
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0.3rem;
  flex-wrap: nowrap;
  align-items: center;
  ${touchableOpacity}
  ${media.desktop`
    margin: 0.5rem 0.2rem;
  `}
`;
const Item = styled.span`
  font-size: 0.7rem;
  font-style: italic;
  word-break: keep-all;
  width: 100%;
  white-space: nowrap;

  /* color: ${props => props.theme.textSecondary}; */
`;

const ColorRectange = styled.div`
  border-radius: 10px;
  width: 10px;
  height: 2px;
  margin: 0rem 0.5rem 0rem 0rem;
`;

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: row;
  width: 100%;

  ${media.desktop`
    flex-direction: column;
    height: 100%;
  `}
`;

export const Legend = memo(Component);
