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
        subtitle: `Calculate the tension of the line with your device`,
        isMobileOnly: true,
      },
      {
        icon: 'length_measurer',
        path: 'length-measurer',
        title: 'Length Measurer',
        subtitle: `Measure the length of the line with your camera`,
        // notAvailableStatus: 'Available Soon',
        isMobileOnly: true,
      },
      {
        icon: 'spirit_level',
        path: 'spirit-level',
        title: 'Spirit Level',
        subtitle: `Level your anchors perfectly with a camera`,
        // notAvailableStatus: 'Available Soon',
        isMobileOnly: true,
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
        subtitle: 'Convert mass, length and force into other units',
      },
      {
        icon: 'traditional_tension_calculator',
        path: 'traditional-tension-calculator',
        title: 'Traditional Tension Calculator',
        subtitle:
          'Calculate the tension of the line with a known length, weight and sag',
      },
      {
        icon: 'volume_calculator',
        path: 'volume-calculator',
        title: 'Volume Calculator',
        subtitle:
          'Calculate the volume, weight and the force needed to move a boulder',
        notAvailableStatus: 'Available Soon',
      },
      {
        icon: 'backup_simulator',
        path: '',
        title: 'Backup Fall Simulator',
        subtitle: 'Calculate the predicted forces and fall height in a backup fall',
        notAvailableStatus: 'Future Plan',
      },
      {
        icon: 'maps_distance',
        path: '',
        title: 'Distance Measurer',
        subtitle: 'Measure the distance between two points using google maps',
        notAvailableStatus: 'Future Plan',
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
        subtitle: 'Compare webbing by stretch, price, weight and MBS',
        notAvailableStatus: 'Available Soon',
      },
      {
        icon: 'scatter_graph',
        path: '',
        title: 'Weblock Charts',
        subtitle: 'Compare weblocks by price, weight, and mbs',
        notAvailableStatus: 'Available Soon',
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
        subtitle: 'Essential articles and publications in your pocket',
        notAvailableStatus: 'Future Plan',
      },
      {
        icon: 'terminology_cheatsheet',
        path: '',
        title: 'Terminology Cheatsheet',
        subtitle: 'Slackline specific terms explained/Technical terms explained',
        notAvailableStatus: 'Future Plan',
      },
    ],
  },
];
