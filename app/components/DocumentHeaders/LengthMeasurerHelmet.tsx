import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import '!file-loader?name=/images/[name].[ext]!./images/LengthMeasurerOgImage.png';

interface Props {}

function Component(props: Props) {
  return (
    <Helmet>
      <title>Length Measurer</title>
      <meta name="description" content="Measure length of the line" />
      <meta property="og:title" content="Slackline Length Measurer" />
      <meta
        property="og:description"
        content="Measure the length of the line using your camera."
      />
      <meta
        property="og:image"
        content="https://slackline.app/images/LengthMeasurerOgImage.png"
      />
      <meta
        property="og:url"
        content="https://slackline.app/length-measurer"
      />
    </Helmet>
  );
}
export const LengthMeasurerHelmet = memo(Component);
