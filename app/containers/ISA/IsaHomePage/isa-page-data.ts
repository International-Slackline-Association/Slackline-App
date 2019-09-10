import { MainPageSection } from './types';

export const data: MainPageSection[] = [
  {
    title: 'Certificates',
    items: [
      {
        icon: 'instructor_certificate',
        path: 'isa/instructor-certificate-explorer',
        title: 'Instructor Certificate Explorer',
        subtitle: 'Check the certificate of an instructor',
      },
      {
        icon: 'rigger_certificate',
        path: 'isa/rigger-certificate-explorer',
        title: 'Rigger Certificate Explorer',
        subtitle: 'Check the certificate of a rigger',
      },
      {
        icon: 'gear_certificate',
        path: '',
        title: 'Gear Certificate Explorer',
        subtitle: 'Check the certificate of a gear',
        notAvailableStatus: 'Available Soon',
      },
    ],
  },
  // {
  //   title: 'Miscellaneous',
  //   items: [
  //     {
  //       icon: 'risk_builder',
  //       path: '',
  //       title: 'Risk Management Builder',
  //       subtitle: 'Construct a risk management document',
  //       notAvailableStatus: 'Available Soon',
  //     },
  //   ],
  // },
];
