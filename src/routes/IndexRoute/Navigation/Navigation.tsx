import React from 'react';
import cn from 'classnames';

import { routesMeta } from '~/src/config/routesMeta';

import { useStyles } from './Navigation.styles';
import { NavLink } from './NavLink';

interface NavigationProps {
  className?: string;
}

const NavigationBase: React.FC<NavigationProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={cn(classes.root, props.className)}>
      {Object.values(routesMeta).map((route) => (
        <NavLink
          key={route.to}
          to={route.to}
          icon={route.icon}
          activeOnlyWhenExact={route.activeOnlyWhenExact}
        >
          {route.label}
        </NavLink>
      ))}
    </div>
  );
};

export const Navigation = React.memo(NavigationBase);