import { IconType } from 'components/Icons/Icon';

interface MainPageSection {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
    icon: IconType;
    path: string;
    isAvailable: boolean;
  }>;
}
export const data: MainPageSection[] = [
  {
    title: 'Calculators',
    items: [
      {
        icon: 'tension',
        path: '',
        title: 'Tension Calculator',
        subtitle: 'Calculate the tension of the line',
        isAvailable: true,
      },
      {
        icon: 'stability_calculator',
        path: '',
        title: 'Stability Calculator',
        subtitle: 'Calculate the stability of the anchors',
        isAvailable: false,
      },
      {
        icon: 'backup_simulator',
        path: '',
        title: 'Backup Fall Simulator',
        subtitle: 'Simulate the backup fall for your highline',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Conversions',
    items: [
      {
        icon: 'mass_converter',
        path: '',
        title: 'Mass conversion',
        subtitle: 'Convert mass to various units',
        isAvailable: true,
      },
      {
        icon: 'length_converter',
        path: '',
        title: 'Length conversion',
        subtitle: 'Convert length to various units',
        isAvailable: true,
      },
      {
        icon: 'force_converter',
        path: '',
        title: 'Force conversion',
        subtitle: 'Convert froce to various units',
        isAvailable: true,
      },
    ],
  },
  {
    title: 'Gears',
    items: [
      {
        icon: 'stretch_chart',
        path: '',
        title: 'Webbing Comparison',
        subtitle: 'Compare webbings by stretch, price, weight',
        isAvailable: true,
      },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      {
        icon: 'collection',
        path: '',
        title: 'ISA Recommendations',
        subtitle: 'Recommended articles from ISA',
        isAvailable: true,
      },
      {
        icon: 'collection',
        path: '',
        title: 'Tutorials',
        subtitle: 'Essential tutorials',
        isAvailable: true,
      },
    ],
  },
];
