import React, { memo } from 'react';
import { ThemeProvider as OriginalThemeProvider } from '../../styles/styled-components';
import { useSelector } from 'react-redux';
import { makeSelectTheme } from './selectors';

const ThemeProvider = (props: { children: React.ReactChild }) => {
  const theme = useSelector(makeSelectTheme());
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};

export default memo(ThemeProvider);
