import React, { memo } from 'react';
import styled from 'styles/styled-components';
import { Helmet } from 'react-helmet';

import media from 'styles/media';

interface Props {}

function Component(props: Props) {
  return (
    <Helmet>
      <title>Tension Calculator</title>
      <meta
        name="description"
        content="Calculate the tension(force) of the line"
      />
    </Helmet>
  );
}

export const DocumentHeader = memo(Component);
