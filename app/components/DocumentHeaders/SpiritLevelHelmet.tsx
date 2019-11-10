import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import '!file-loader?name=/images/[name].[ext]!./images/SpiritLevelOgImage.png';

interface Props {}

function Component(props: Props) {
  return (
    <Helmet>
      <title>Spirit Level</title>
      <meta name="description" content="Level your anchors" />
      <meta property="og:title" content="Slackline Spirit Level" />
      <meta property="og:description" content="Level your anchors using your camera." />
      <meta
        property="og:image"
        content="https://slackline.app/images/SpiritLevelOgImage.png"
      />
      <meta
        property="og:url"
        content="https://slackline.app/spirit-level"
      />
    </Helmet>
  );
}
export const SpiritLevelHelmet = memo(Component);
