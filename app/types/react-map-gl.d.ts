// tslint:disable
import 'react-map-gl';
import * as React from 'react';

declare module 'react-map-gl' {
  export class Source extends React.PureComponent<any> {}
  export class Layer extends React.PureComponent<any> {}

}
