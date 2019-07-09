import * as React from 'react';
import styled from '../../styles/styled-components';
import media from 'styles/media';
import { MainPageItem } from 'components/MainPageListItem/Item';
import { MainPageSection } from 'components/MainPageListItem/Section';

interface MainPageSection {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
    icon: string;
    path: string;
  }>;
}
const data: MainPageSection[] = [
  {
    title: 'Calculators',
    items: [
      {
        icon: '',
        path: '',
        title: 'Tension Calculator',
        subtitle: 'Calculate the tension of the line',
      },
      {
        icon: '',
        path: '',
        title: 'Stability Calculator',
        subtitle: 'Calculate the stability of the line',
      },
    ],
  },
];

export default function HomePage() {
  function onItemClick(path: string) {
    return () => {};
  }

  return (
    <Wrapper>
      <Text>
        ALL THE TOOLS YOU NEED <br /> ACCESS OFFLINE
      </Text>
      {data.map((section, index) => {
        return (
          <React.Fragment key={index}>
            <MainPageSection>{section.title}</MainPageSection>
            {section.items.map((item, index) => {
              return (
                <MainPageItem
                  key={index}
                  onItemClick={onItemClick(item.path)}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

const Text = styled.span`
  align-self: center;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  line-height: 2em;
  margin-bottom: 2em;
  ${media.desktop`
    text-align: left;
    align-self: flex-start;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 1em;
  padding: 1em;
  ${media.desktop`
    padding: 2em;
  `};
`;
