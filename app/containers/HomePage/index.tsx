import * as React from 'react';
import styled from '../../styles/styled-components';
import media from 'styles/media';
import { MainPageItem } from 'components/MainPageListItem/Item';
import { MainPageSection } from 'components/MainPageListItem/Section';
import { data } from './data';
import AppBackgroundContainer from 'components/AppBackgroundContainer';

export default function HomePage() {
  function onItemClick(path: string) {
    return () => {};
  }

  return (
    <AppBackgroundContainer>
      <Wrapper>
        <TextSection>
          <Text>
            Tools and resources you need <br />
            <Text style={{ fontWeight: 'bold' }}>ACCESS OFFLINE</Text>
          </Text>
        </TextSection>
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
  ${media.desktop`
    margin: 0em 3em 2em 0em;
    width: 15em;
  `};
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

const TextSection = styled.span`
  display: flex;
  margin-bottom: 2em;
  ${media.desktop`
    display: none;
  `};
`;

const Text = styled.span`
  align-self: center;
  font-size: 1em;
  text-align: center;
  line-height: 2em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.desktop`
    margin-top: 5em;
    margin-bottom: 2em;
  `};
`;
