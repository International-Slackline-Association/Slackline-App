import { IconType } from 'components/MainPageListItem/Icon';

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
      {
        icon: 'stretch_chart',
        path: '',
        title: 'Stretch Charts',
        subtitle: 'View stretch charts of the webbings',
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
    title: 'Certificates',
    items: [
      {
        icon: 'instructor_certificate',
        path: 'instructor-certificate-explorer',
        title: 'Instructor Certificate Explorer',
        subtitle: 'Check the certificate of an instructor',
        isAvailable: true,
      },
      {
        icon: 'rigger_certificate',
        path: '',
        title: 'Rigger Certificate Explorer',
        subtitle: 'Check the certificate of a rigger',
        isAvailable: false,
      },
      {
        icon: 'gear_certificate',
        path: '',
        title: 'Gear Certificate Explorer',
        subtitle: 'Check the certificate of a gear',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Documents & PDF',
    items: [
      {
        icon: 'collection',
        path: '',
        title: 'Top Picks',
        subtitle:
          'Quick access to the most recommended documents',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      {
        icon: 'risk_builder',
        path: '',
        title: 'Risk Management Builder',
        subtitle: 'Construct a risk management document',
        isAvailable: false,
      },
    ],
  },
];
