import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import '!file-loader?name=/images/[name].[ext]!./images/OgImage.png';

interface Props {}

function Component(props: Props) {
  return (
    <Helmet>
      <title>Slackline App</title>
      <meta
        name="description"
        content="Slackline App is a collection of the tools and resources that is available offline"
      />
      <meta
        name="keywords"
        // tslint:disable-next-line: max-line-length
        content="slackline, app, tools, resources, tension, calculator, webbing, weblock, compare, tutorial, measurement, length"
      />
      <meta property="og:title" content="Slackline App" />
      <meta
        property="og:description"
        content="Offline tools and resources for slackliners"
      />
      <meta
        property="og:image"
        content="https://slackline.app/images/OgImage.png"
      />
      <meta property="og:url" content="https://slackline.app" />
    </Helmet>
  );
}

export const HomepageHelmet = memo(Component);
