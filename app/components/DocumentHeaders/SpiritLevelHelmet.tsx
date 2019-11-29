import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import '!file-loader?name=/images/[name].[ext]!./images/SpiritLevelOgImage.png';

interface Props {}

function Component(props: Props) {
  return (
    <Helmet>
      <title>Horizontal Leveling</title>
      <meta name="description" content="Level your anchors" />
      <meta property="og:title" content="Slackline Horizontal Leveling" />
      <meta property="og:description" content="Level your anchors perfectly with a camera" />
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
