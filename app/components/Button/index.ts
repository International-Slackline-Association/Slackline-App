import styled from '../../styles/styled-components';
import { touchableOpacity } from 'styles/mixins';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background-color: ${props => props.theme.brand};
  border-radius: 3px;
  font-weight: bold;
  padding: 1rem 2rem;
  ${touchableOpacity};
  outline: none;
  opacity: ${props => props.disabled && 0.2};
  color: ${props => props.theme.text};
`;
