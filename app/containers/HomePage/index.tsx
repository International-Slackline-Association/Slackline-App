import React, { useEffect, useState } from 'react';
import styled from '../../styles/styled-components';
import media from 'styles/media';
import { MainPageItem } from 'components/MainPageListItem/Item';
import { data } from './main-page-data';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { isMobile } from 'react-device-detect';
import { MainPageSectionItem } from './types';
import { MainPageSection } from 'components/MainPageListItem/Section';
import { useVisitAnalytics } from 'utils/hooks/analytics';
import { AddHomeButtonToolTip } from 'components/Tooltips/AddHomeButtonTooltip';
import { HomepageHelmet } from 'components/DocumentHeaders/HomepageHelmet';
import { touchableOpacity, elevatedShadow } from 'styles/mixins';
import InstallIcon from './install_icon.svg';
import { Utils } from 'utils/index';

interface Props extends RouteComponentProps {}

export default function HomePage(props: Props) {
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showAccessOfflineTip, setShowAccessOfflineTip] = useState(true);

  const [deferredPrompt, setDeferredPrompt] = useState();

  const dispatch = useDispatch();
  useVisitAnalytics('main_page_visit');

  useEffect(() => {
    if (Utils.isInStandaloneMode()) {
      setShowAccessOfflineTip(false);
      return () => {};
    }
    window.addEventListener('beforeinstallprompt', e => {
      handleAddHomeScreenPrompt(e);
    });
    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleAddHomeScreenPrompt,
      );
    };
  }, []);

  function handleAddHomeScreenPrompt(e: any) {
    // e.preventDefault();
    setDeferredPrompt(e);
    setShowInstallButton(true);
    setShowAccessOfflineTip(false);
  }

  function onInstallClick() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        setShowInstallButton(false);
        if (choiceResult.outcome === 'accepted') {
          setShowAccessOfflineTip(false);
        }
        setDeferredPrompt(null);
      });
    }
  }

  function onItemClick(item: MainPageSectionItem) {
    return (isDisabled?: boolean) => {
      if (!isDisabled) {
        dispatch(push(item.path));
      }
    };
  }

  return (
    <AppBackgroundContainer>
      <HomepageHelmet />
      <Wrapper>
        <TextSection>
          <Text>
            Tools and resources for slackliners <br />
            {showAccessOfflineTip && (
              <Text style={{ fontWeight: 'bold' }}>
                ACCESS OFFLINE <AddHomeButtonToolTip />
              </Text>
            )}
          </Text>
          <InstallButton show={showInstallButton} onClick={onInstallClick}>
            Install
            <img src={InstallIcon} />
          </InstallButton>
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
                          onItemClick={onItemClick(item)}
                          icon={item.icon}
                          isIconVertical={item.isIconVertical}
                          title={item.title}
                          subtitle={item.subtitle}
                          notAvailableStatus={item.notAvailableStatus}
                          isMobileOnly={item.isMobileOnly}
                          restrictedPlatform={item.restrictedPlatform}
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

const InstallButton = styled.button<{ show: boolean }>`
  display: flex;
  align-items: center;
  /* font-size: 0.8rem; */
  border: none;
  /* font-weight: bold; */
  background-color: ${props => props.theme.brand};
  border-radius: 20px;
  padding: ${props => (props.show ? '0.2rem 0.8rem' : ' 0rem')};
  ${touchableOpacity};
  ${elevatedShadow};
  outline: none;
  margin-top: ${props => (props.show ? '1rem' : '0rem')};
  max-height: ${props => (props.show ? '30px' : '0px')};
  transition: max-height 0.2s ease-in;
  overflow: hidden;
  & img {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.2rem;
  }
`;

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
  flex-direction: column;
  align-items: center;
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
    align-items: flex-start;
  `};
`;
