import React from 'react';
import { IChild } from './interfaces/default-props';
import LoadingProvider from './LoadingProvider';
import UserProvider from './UserProvider';

const ProvidersApplication: React.FC<IChild> = ({ children }) => {
  return (
    <LoadingProvider>
      <UserProvider>{children}</UserProvider>
    </LoadingProvider>
  );
};

export default ProvidersApplication;
