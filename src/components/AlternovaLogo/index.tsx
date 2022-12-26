import React from 'react';

import { Logo, LogoContainer } from './styles';

export const AlternovaLogo = () => {
  return (
    <LogoContainer>
      <Logo
        source={require('~src/assets/images/logo.png')}
        resizeMode="contain"
      />
    </LogoContainer>
  );
};
