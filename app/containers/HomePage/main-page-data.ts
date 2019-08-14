import { IconType } from 'components/Icons/Icon';
import { MainPageSection } from './types';

export const data: MainPageSection[] = [
  {
    title: 'Calculators',
    items: [
      {
        icon: 'unit_converter',
        path: 'unit-converter',
        title: 'Unit Converter',
        subtitle: 'Convert mass, length and force into other units',
        isAvailable: true,
      },
      {
        icon: 'tension',
        path: 'tension-calculator',
        title: 'Tension Calculator',
        subtitle: 'Calculate the tension of the line',
        isAvailable: true,
      },
      {
        icon: 'stability_calculator',
        path: '',
        title: 'Stability Calculator',
        subtitle: 'Calculate the stability of the anchors',
        isAvailable: true,
      },
      {
        icon: 'backup_simulator',
        path: '',
        title: 'Backup Fall Simulator',
        subtitle: 'Simulate the backup fall for your highline',
        isAvailable: true,
      },
      {
        icon: 'maps_distance',
        path: '',
        title: 'Distance Measurer',
        subtitle: 'Measure the distance between two points using google maps',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Gear',
    items: [
      {
        icon: 'stretch_chart',
        path: 'webbing-charts',
        title: 'Webbing Charts',
        subtitle: 'Compare webbings by stretch, price, weight and mbs',
        isAvailable: true,
      },
      {
        icon: 'scatter_graph',
        path: '',
        title: 'Weblock Comparison',
        subtitle: 'Compare weblocks by price and weight',
        isAvailable: true,
      },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      {
        icon: 'recommended',
        path: '',
        title: 'Recommended Articles',
        subtitle: 'Essential Articles & Publications in your pocket',
        isAvailable: true,
      },
      {
        icon: 'tutorial',
        path: '',
        title: 'Tutorials',
        subtitle: 'Online tutorials for everyone',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        icon: 'maps',
        path: '',
        title: 'Slackmap',
        subtitle: 'Find slackliners, groups and spots on slackmap.com',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Personal',
    items: [
      {
        icon: 'collection',
        path: '',
        title: 'My Bookmarks',
        subtitle: 'Bookmark your own links, pdfs, posts etc... to access later',
        isAvailable: false,
      },
    ],
  },
];
