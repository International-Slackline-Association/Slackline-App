import styled from '../../styles/styled-components';
import { touchableOpacity } from 'styles/mixins';

export const Button = styled.button`
  display: flex;
  border: none;
  background-color: ${props => props.theme.brand};
  border-radius: 3px;
  font-weight: bold;
  padding: 1em 2em;
  ${touchableOpacity};
  outline: none;
  opacity: ${props => props.disabled && 0.2};
  color: ${props => props.theme.text};
`;
