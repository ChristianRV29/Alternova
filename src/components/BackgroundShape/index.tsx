import React, { useContext } from 'react';
import { ThemeContext } from '~src/context';

import { Shape } from './styles';

export const BackgroundShape = () => {
  const { theme } = useContext(ThemeContext);

  return <Shape theme={theme} />;
};
