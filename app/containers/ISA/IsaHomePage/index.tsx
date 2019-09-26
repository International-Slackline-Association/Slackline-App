import * as React from 'react';
import styled from '../../../styles/styled-components';
import media from 'styles/media';
import { MainPageItem } from 'components/MainPageListItem/Item';
import { data } from './isa-page-data';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Helmet } from 'react-helmet';
import { isMobile } from 'react-device-detect';
import { MainPageSectionItem } from './types';
import { MainPageSection } from 'components/MainPageListItem/Section';
import IsaAppHeader from '../IsaAppHeader';

interface Props extends RouteComponentProps {}

export default function HomePage(props: Props) {
  const dispatch = useDispatch();

  function onItemClick(item: MainPageSectionItem) {
    return () => {
      if (!item.isMobileOnly || isMobile) {
        dispatch(push(item.path));
      }
    };
  }
  const AppHeader = <IsaAppHeader showBackButton />;
  return (
    <React.Fragment>
      <Helmet>
        <title>ISA Certificates</title>
        <meta
          name="description"
          content="Slackline Certificates from International Slackline Association"
        />
      </Helmet>
      <Wrapper>
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
                          onItemClick={onItemClick(item)}
                          icon={item.icon}
                          isIconVertical={item.isIconVertical}
                          title={item.title}
                          subtitle={item.subtitle}
                          notAvailableStatus={item.notAvailableStatus}
                          isMobileOnly={item.isMobileOnly}
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
    </React.Fragment>
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
  margin: 1rem;
`;
