import styled from 'styles/styled-components';
import media from 'styles/media';
import { Icon } from 'components/Icons/Icon';

export const HeaderIcon = styled(Icon)`
  display: flex;
  flex: none;
  width: 3rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  ${media.desktop`
  margin-top: 0rem;
`};
  & span {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.05rem;
    margin-top: 1rem;
    ${media.desktop`
    font-size: 1.5em;
`};
  }
`;
