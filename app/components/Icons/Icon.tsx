import React, { memo, useState } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import icon from './svgs/tools_icon.svg';
import InstructorCertificateIcon from './svgs/instructor_certificate.svg';
import RiggerCertificateIcon from './svgs/rigger_certificate.svg';
import GearCertificateIcon from './svgs/gear_certificate.svg';
import TensionIcon from './svgs/tension.svg';
import UnitConverterIcon from './svgs/unit_converter.svg';
import MassConverterIcon from './svgs/mass_converter.svg';
import StabilityCalculatorIcon from './svgs/stability.svg';
import BackupSimulatorIcon from './svgs/backup_simulator.svg';
import StretchChartIcon from './svgs/stretch_chart.svg';
import RiskBuilderIcon from './svgs/risk_builder.svg';
import LengthConverterIcon from './svgs/measure.svg';
import ForceConverterIcon from './svgs/spring.svg';
import CollectionIcon from './svgs/bookmark.svg';
import RecommendedIcon from './svgs/recommended.svg';
import MapsIcon from './svgs/maps.svg';
import TutorialIcon from './svgs/tutorial.svg';
import ScatterGraphIcon from './svgs/scatter_graph.svg';
import MapsDistanceIcon from './svgs/maps_distance.svg';
import TripodCameraIcon from './svgs/tripod_camera.svg';
import CellphoneTensionIcon from './svgs/cellphone_tension.svg';
import CubeIcon from './svgs/cube.svg';
import SpiritLevelIcon from './svgs/spirit_level.svg';
import BookIcon from './svgs/book.svg';
import LocationConnectionIcon from './svgs/location_connection.svg';

export type IconType =
  | 'instructor_certificate'
  | 'gear_certificate'
  | 'rigger_certificate'
  | 'traditional_tension_calculator'
  | 'unit_converter'
  | 'mass_converter'
  | 'length_converter'
  | 'force_converter'
  | 'stability_calculator'
  | 'stretch_chart'
  | 'backup_simulator'
  | 'risk_builder'
  | 'collection'
  | 'tutorial'
  | 'recommended'
  | 'maps'
  | 'scatter_graph'
  | 'maps_distance'
  | 'length_measurer'
  | 'tension_calculator'
  | 'volume_calculator'
  | 'spirit_level'
  | 'terminology_cheatsheet'
  | 'meetup'
  | 'default';

interface Props {
  iconType: IconType;
  className?: any;
}

export const Icon = memo((props: Props) => {
  let src = icon;

  switch (props.iconType) {
    case 'unit_converter':
      src = UnitConverterIcon;
      break;
    case 'mass_converter':
      src = MassConverterIcon;
      break;
    case 'length_converter':
      src = LengthConverterIcon;
      break;
    case 'force_converter':
      src = ForceConverterIcon;
      break;
    case 'traditional_tension_calculator':
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
    case 'scatter_graph':
      src = ScatterGraphIcon;
      break;
    case 'risk_builder':
      src = RiskBuilderIcon;
      break;
    case 'collection':
      src = CollectionIcon;
      break;
    case 'recommended':
      src = RecommendedIcon;
      break;
    case 'tutorial':
      src = TutorialIcon;
      break;
    case 'maps':
      src = MapsIcon;
      break;
    case 'maps_distance':
      src = MapsDistanceIcon;
      break;
    case 'length_measurer':
      src = TripodCameraIcon;
      break;
    case 'tension_calculator':
      src = CellphoneTensionIcon;
      break;
    case 'volume_calculator':
      src = CubeIcon;
      break;
    case 'spirit_level':
      src = SpiritLevelIcon;
      break;
    case 'terminology_cheatsheet':
      src = BookIcon;
      break;
    case 'meetup':
      src = LocationConnectionIcon;
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
