import LoadingContext from '@/contexts/LoadingContext';
import { LoadingContextData } from '@/contexts/interfaces/loading-context-props.interface';
import React from 'react';

function useLoading(): LoadingContextData {
  const context = React.useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading deve ser usado com o LoadingProvider');
  }

  return context;
}

export default useLoading;
