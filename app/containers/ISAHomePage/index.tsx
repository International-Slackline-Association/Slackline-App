import * as React from 'react';
import styled from '../../styles/styled-components';
import media from 'styles/media';
import { MainPageItem } from 'components/MainPageListItem/Item';
import { MainPageSection } from 'components/MainPageListItem/Section';
import { data } from './data';
import AppBackgroundContainer from 'components/AppBackgroundContainer';

export default function ISAHomePage() {
  function onItemClick(path: string) {
    return () => {};
  }

  return (
    <AppBackgroundContainer>
      <Wrapper>
        <Text>
          International Slackline Association <br /> Online Tools
        </Text>
        <ItemsWrapper>
          {data.map((section, index) => {
            return (
              <React.Fragment key={index}>
                <SectionWrapper>
                  <MainPageSection>{section.title}</MainPageSection>
                  {section.items.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <MainPageItem
                          key={index}
                          onItemClick={onItemClick(item.path)}
                          icon={item.icon}
                          title={item.title}
                          subtitle={item.subtitle}
                          isAvailable={item.isAvailable}
                        />
                        {index !== section.items.length - 1 && <Divider />}
                      </React.Fragment>
                    );
                  })}
                </SectionWrapper>
              </React.Fragment>
            );
          })}
        </ItemsWrapper>
      </Wrapper>
    </AppBackgroundContainer>
  );
}

const Divider = styled.div`
  display: flex;
  height: 1px;
  background-color: ${props => props.theme.border};
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 1em 1.5em 1em;
  max-width: 66vw;
  flex-grow: 0;
  ${media.desktop`
    margin: 0em 3em 2em 0em;
    width: 16em;
  `};
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
    align-self: flex-start;
    flex-wrap: wrap;
    overflow-y: scroll;
    max-height: 66vh;
  `};
`;

const Text = styled.span`
  text-transform: uppercase;
  align-self: center;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  line-height: 2em;
  margin-bottom: 2em;
  ${media.desktop`
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 3em;
    text-align: left;
    align-self: flex-start;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  ${media.desktop`
  `};
`;
