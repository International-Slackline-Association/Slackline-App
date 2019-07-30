import { MainPageSection } from './types';

export const data: MainPageSection[] = [
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
