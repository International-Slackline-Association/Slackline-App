import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import '!file-loader?name=/images/[name].[ext]!./images/TensionCalculatorOgImage.png';

interface Props {}

function Component(props: Props) {
  return (
    <Helmet>
      <title>Tension Calculator</title>
      <meta
        name="description"
        content="Calculate the tension(force) of the line"
      />
      <meta property="og:title" content="Slackline Tension Calculator" />
      <meta property="og:description" content="Calculate the tension of the line with your device" />
      <meta
        property="og:image"
        content="https://slackline.app/images/TensionCalculatorOgImage.png"
      />
      <meta
        property="og:url"
        content="https://slackline.app/tension-calculator"
      />
    </Helmet>
  );
}

export const TensionCalculatorHelmet = memo(Component);
