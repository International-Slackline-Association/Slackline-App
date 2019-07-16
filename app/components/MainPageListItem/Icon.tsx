import React, { memo, useState } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import icon from './Icons/tools_icon.svg';
import InstructorCertificateIcon from './Icons/instructor_certificate.svg';
import RiggerCertificateIcon from './Icons/rigger_certificate.svg';
import GearCertificateIcon from './Icons/gear_certificate.svg';
import TensionIcon from './Icons/tension.svg';
import MassConverterIcon from './Icons/mass_converter.svg';
import StabilityCalculatorIcon from './Icons/stability.svg';
import BackupSimulatorIcon from './Icons/backup_simulator.svg';
import StretchChartIcon from './Icons/stretch_chart.svg';
import RiskBuilderIcon from './Icons/risk_builder.svg';
import LengthConverterIcon from './Icons/measure.svg';
import ForceConverterIcon from './Icons/spring.svg';
import CollectionIcon from './Icons/bookmark.svg';

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
}

function Icon(props: Props) {
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
  return <Img src={src} />;
}

const Img = styled.img`
  display: flex;
  width: 2em;
  height: 2em;
  margin-top: 0.2em;
  margin-right: 0.5em;
`;

export default memo(Icon);
