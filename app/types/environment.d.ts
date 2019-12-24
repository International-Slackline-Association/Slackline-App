/* tslint:disable */ 
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    APP_ENV: 'test' | 'production';
    RUN_ENV: 'local';
    IDENTITY_POOL_ID: string;
    PINPOINT_APP_ID: string;
    MAPTILER_KEY: string;
    REGION: 'eu-west-1' | 'eu-central-1';
  }
}
