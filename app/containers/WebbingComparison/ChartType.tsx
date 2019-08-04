import styled from 'styles/styled-components';
import media from 'styles/media';
import { touchableOpacity } from 'styles/mixins';

export const ChartTypeText = styled.span`
  display: flex;
  color: ${props => props.theme.textTertiary};
  font-style: italic;
  font-size: 0.7rem;
  flex: none;
  ${media.desktop`
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
  `};
`;
export const ChartTypeItemTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.5rem 0rem 1rem 0rem;
  ${media.desktop`
    flex-direction: column;
    margin: 0rem 0.5rem 0rem 1rem;
  `};
`;

export const Divider = styled.div`
  display: flex;
  height: 1px;
  transform: rotate(90deg);
  width: 1rem;
  align-self: center;
  background-color: ${props => props.theme.border};
  ${media.desktop`
    display: none;
    width: 100%;
    transform: rotate(0deg);
  `};
`;

export const ChartTypeItemText = styled.span<{ isSelected: boolean }>`
  display: flex;
  color: ${props =>
    props.isSelected ? props.theme.text : props.theme.textSecondary};
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
  font-style: italic;
  font-size: 0.8rem;
  text-align: center;
  align-self: center;
  word-break: keep-all;
  margin: 0rem 0.2rem 0rem 0.2rem;
  ${touchableOpacity};

  ${media.desktop`
    margin: 0.5rem 0rem 0.5rem 0rem;
  `};
`;
