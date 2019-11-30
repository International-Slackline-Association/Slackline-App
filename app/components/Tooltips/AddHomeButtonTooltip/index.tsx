import React, { memo, useState } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';

import TooltipIcon from './tooltip.svg';
import { touchableOpacity } from 'styles/mixins';
import { TooltipContent } from './TooltipContent';
import Portal from 'components/Modal';

interface Props {}

function Component(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <React.Fragment>
      <TooltipButton onClick={toggle} />
      {isOpen ? (
        <Portal backgroundClicked={toggle} isTransparentBackground={true} allowEvents={false}>
          <TooltipContent onClose={toggle}/>
        </Portal>
      ) : null}
    </React.Fragment>
  );
}

const TooltipButton = styled.img.attrs({
  src: TooltipIcon,
})`
  ${touchableOpacity}
  /* display: flex; */
  height: 0.8rem;
  width: 0.8rem;
  margin-bottom: 2px;
`;

export const AddHomeButtonToolTip = memo(Component);
