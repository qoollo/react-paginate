'use strict';

import React from 'react';
import { Menu } from 'semantic-ui-react';

const BreakView = (props) => {
  const label = props.breakLabel;
  const className = props.breakClassName || 'break';

  return (
    <Menu.Item className={className}>
      {label}
    </Menu.Item>
  );
}

export default BreakView;
