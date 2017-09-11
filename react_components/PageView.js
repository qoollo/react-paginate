'use strict';

import React from 'react';
import { Menu } from 'semantic-ui-react';

const PageView = (props) => {
  let cssClassName = props.pageClassName;
  const linkClassName = props.pageLinkClassName;
  const onClick = props.onClick;
  const href = props.href;
  let ariaLabel = 'Page ' + props.page +
    (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
  let ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';
    ariaLabel = 'Page ' + props.page + ' is your current page';
    if (typeof(cssClassName) !== 'undefined') {
      cssClassName = cssClassName + ' ' + props.activeClassName;
    } else {
      cssClassName = props.activeClassName;
    }
  }

  return (
      <Menu.Item
        className={cssClassName}
        onClick={onClick}
        href={href}
        tabIndex="0"
        aria-label={ariaLabel}
        aria-current={ariaCurrent}
        onKeyPress={onClick}
      >
        {props.page}
      </Menu.Item>
  )
}

export default PageView;
