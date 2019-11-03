import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

const amplifyConfig = {
  Auth: {
    identityPoolId: process.env.IDENTITY_POOL_ID,
    region: process.env.REGION,
  },
};
Auth.configure(amplifyConfig);

const analyticsConfig = {
  // OPTIONAL - disable Analytics if true
  disabled: false,
  // OPTIONAL - Allow recording session events. Default is true.
  autoSessionRecord: true,
  AWSPinpoint: {
    appId: process.env.PINPOINT_APP_ID,
    region: 'eu-west-1',
    mandatorySignIn: false,

    // Buffer settings used for reporting analytics events.
    // OPTIONAL - The buffer size for events in number of items.
    bufferSize: 1000,

    // OPTIONAL - The interval in milliseconds to perform a buffer check and flush if necessary.
    flushInterval: 5000, // 5s

    // OPTIONAL - The number of events to be deleted from the buffer when flushed.
    flushSize: 100,

    // OPTIONAL - The limit for failed recording retries.
    resendLimit: 5,
  },
};

Analytics.configure(analyticsConfig);
