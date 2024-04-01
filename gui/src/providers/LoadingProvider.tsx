import React, { useState } from 'react';
import { IChild } from './interfaces/default-props';
import LoadingContext from '@/contexts/LoadingContext';

const LoadingProvider: React.FC<IChild> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const showLoading = () => {
    setOpen(true);
  };

  const closeLoading = () => setOpen(false);

  return (
    <LoadingContext.Provider value={{ showLoading, closeLoading, loading: open }}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
