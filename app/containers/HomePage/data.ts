interface MainPageSection {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
    icon: string;
    path: string;
    isAvailable: boolean;
  }>;
}
export const data: MainPageSection[] = [
  {
    title: 'Calculators',
    items: [
      {
        icon: '',
        path: '',
        title: 'Tension Calculator',
        subtitle: 'Calculate the tension of the line',
        isAvailable: true,
      },
      {
        icon: '',
        path: '',
        title: 'Stability Calculator',
        subtitle: 'Calculate the stability of the anchors',
        isAvailable: false,
      },
      {
        icon: '',
        path: '',
        title: 'Backup Fall Simulator',
        subtitle: 'Simulate the backup fall for your highline',
        isAvailable: false,
      },
      {
        icon: '',
        path: '',
        title: 'Stretch Charts',
        subtitle: 'View strech charts of the webbings',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Conversions',
    items: [
      {
        icon: '',
        path: '',
        title: 'Mass conversion',
        subtitle: 'Convert mass to various units',
        isAvailable: true,
      },
      {
        icon: '',
        path: '',
        title: 'Length conversion',
        subtitle: 'Convert length to various units',
        isAvailable: true,
      },
      {
        icon: '',
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
        icon: '',
        path: '',
        title: 'Instructor Certificate Explorer',
        subtitle: 'Check the certificate of an instructor',
        isAvailable: true,
      },
      {
        icon: '',
        path: '',
        title: 'Rigger Certificate Explorer',
        subtitle: 'Check the certificate of a rigger',
        isAvailable: false,
      },
      {
        icon: '',
        path: '',
        title: 'Gear Certificate Explorer',
        subtitle: 'Check the certificate of a gear',
        isAvailable: false,
      },
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      {
        icon: '',
        path: '',
        title: 'Risk Management Builder',
        subtitle: 'Construct a risk management document',
        isAvailable: false,
      },
    ],
  },
];
