import { IconType } from 'components/Icons/Icon';
import { MainPageSection } from './types';

export const data: MainPageSection[] = [
  {
    title: 'Interactive Tools',
    items: [
      {
        icon: 'tension_calculator',
        isIconVertical: true,
        path: 'tension-calculator',
        title: 'Tension Calculator',
        subtitle: `Calculate line tension with your device`,
        isMobileOnly: true,
      },
      {
        icon: 'length_measurer',
        path: 'length-measurer',
        title: 'Length Measurer',
        subtitle: `Measure the length of the line with your camera`,
        isMobileOnly: true,
        restrictedPlatform: 'iosPWA',
      },
      {
        icon: 'spirit_level',
        path: 'spirit-level',
        title: 'Horizontal Leveling',
        subtitle: `Use your camera to level your anchors`,
        isMobileOnly: true,
        restrictedPlatform: 'iosPWA',
      },
    ],
  },
  {
    title: 'Calculators',
    items: [
      {
        icon: 'unit_converter',
        path: 'unit-converter',
        title: 'Unit Converter',
        subtitle: 'Convert mass, length and force units',
      },
      {
        icon: 'traditional_tension_calculator',
        path: 'traditional-tension-calculator',
        title: 'Traditional Tension Calculator',
        subtitle: 'Calculate the tension of the line',
      },
      {
        icon: 'maps_distance',
        path: 'distance-measurer',
        title: 'Distance Measurer',
        subtitle: 'Measure distances between points using maps',
      },
    ],
  },
  {
    title: 'Gear',
    items: [
      {
        icon: 'stretch_chart',
        path: '',
        title: 'Webbing Charts',
        subtitle: 'Compare webbings by stretch, price, weight and MBS',
        notAvailableStatus: 'Available Soon',
      },
      {
        icon: 'scatter_graph',
        path: '',
        title: 'Weblock Charts',
        subtitle: 'Compare weblocks by price, weight, and MBS',
        notAvailableStatus: 'Available Soon',
      },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      {
        icon: 'tutorial',
        path: '',
        title: 'Animated Tutorials',
        subtitle: 'Simple animated tutorials for beginners',
        notAvailableStatus: 'Available Soon',
      },
      {
        icon: 'recommended',
        path: '',
        title: 'Recommended Articles',
        subtitle: 'Essential articles and publications in your pocket',
        notAvailableStatus: 'Future Plan',
      },
    ],
  },
  // {
  //   title: 'Community',
  //   items: [
  //     {
  //       icon: 'meetup',
  //       path: '',
  //       title: 'Meetup',
  //       subtitle: 'Find & organize slackline activities with people around you',
  //       notAvailableStatus: 'Future Plan',
  //       isIconVertical: true,
  //     },
  //     {
  //       icon: 'maps',
  //       path: '',
  //       title: 'SlackMap',
  //       subtitle: 'Simplified version of SlackMap spots',
  //       notAvailableStatus: 'Future Plan',
  //     },
  //   ],
  // },
];
