import React, { memo, useState } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import icon from './svgs/tools_icon.svg';
import InstructorCertificateIcon from './svgs/instructor_certificate.svg';
import RiggerCertificateIcon from './svgs/rigger_certificate.svg';
import GearCertificateIcon from './svgs/gear_certificate.svg';
import TensionIcon from './svgs/tension.svg';
import MassConverterIcon from './svgs/mass_converter.svg';
import StabilityCalculatorIcon from './svgs/stability.svg';
import BackupSimulatorIcon from './svgs/backup_simulator.svg';
import StretchChartIcon from './svgs/stretch_chart.svg';
import RiskBuilderIcon from './svgs/risk_builder.svg';
import LengthConverterIcon from './svgs/measure.svg';
import ForceConverterIcon from './svgs/spring.svg';
import CollectionIcon from './svgs/bookmark.svg';

export type IconType =
  | 'instructor_certificate'
  | 'gear_certificate'
  | 'rigger_certificate'
  | 'tension'
  | 'mass_converter'
  | 'length_converter'
  | 'force_converter'
  | 'stability_calculator'
  | 'stretch_chart'
  | 'backup_simulator'
  | 'risk_builder'
  | 'collection'
  | 'default';

interface Props {
  iconType: IconType;
  className?: any;
}

export const Icon = memo((props: Props) => {
  let src = icon;

  switch (props.iconType) {
    case 'mass_converter':
      src = MassConverterIcon;
      break;
    case 'length_converter':
      src = LengthConverterIcon;
      break;
    case 'force_converter':
      src = ForceConverterIcon;
      break;
    case 'tension':
      src = TensionIcon;
      break;
    case 'instructor_certificate':
      src = InstructorCertificateIcon;
      break;
    case 'rigger_certificate':
      src = RiggerCertificateIcon;
      break;
    case 'gear_certificate':
      src = GearCertificateIcon;
      break;
    case 'stability_calculator':
      src = StabilityCalculatorIcon;
      break;
    case 'backup_simulator':
      src = BackupSimulatorIcon;
      break;
    case 'stretch_chart':
      src = StretchChartIcon;
      break;
    case 'risk_builder':
      src = RiskBuilderIcon;
      break;
    case 'collection':
      src = CollectionIcon;
      break;
    default:
      break;
  }
  return <Img className={props.className} src={src} />;
});

const Img = styled.img`
  /* color: ${props => props.theme.brand}, */
  color: red;

  path {
    color:red;
  }
`;
