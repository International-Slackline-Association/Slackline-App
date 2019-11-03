import Analytics from '@aws-amplify/analytics';

import './configure';

export class AppAnalytics {
  public static recordPageVisit(name: string) {
    Analytics.record({ name: name });
  }
}
