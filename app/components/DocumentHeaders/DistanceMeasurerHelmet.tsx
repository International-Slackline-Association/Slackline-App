import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import '!file-loader?name=/images/[name].[ext]!./images/DistanceMeasurerOgImage.png';

interface Props {}

function Component(props: Props) {
  return (
    <Helmet>
      <title>Distance Measurer</title>
      <meta name="description" content="Measure the distance using maps" />
      <meta property="og:title" content="Slackline Distance Measurer" />
      <meta
        property="og:description"
        content="Measure the distance using maps"
      />
      <meta
        property="og:image"
        content="https://slackline.app/images/DistanceMeasurerOgImage.png"
      />
      <meta
        property="og:url"
        content="https://slackline.app/distance-measurer"
      />
    </Helmet>
  );
}
export const DistanceMeasurerHelmet = memo(Component);
