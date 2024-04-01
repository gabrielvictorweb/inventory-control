import UserContext from '@/contexts/UserContext';
import { UserContextData } from '@/contexts/interfaces/user-context-props.interface';
import React from 'react';

function useUser(): UserContextData {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext deve ser usado com o UserContextProvider');
  }

  return context;
}

export default useUser;
