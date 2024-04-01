import React from 'react';
import { IChild } from './interfaces/default-props';
import UserContext from '@/contexts/UserContext';
import { UserInterface } from '@/services/auth/interfaces';
import { authUser, userData } from '@/services/auth';
import secure from '@/config/secureLS';

const UserProvider: React.FC<IChild> = ({ children }) => {
  const [user, setUser] = React.useState<UserInterface | undefined>();

  React.useEffect(() => {
    getUser();
  }, []);

  const auth = async (email: string, password: string): Promise<UserInterface | undefined> => {
    try {
      const authResponse = await authUser(email, password);

      if (authResponse) {
        console.log('authResponse')
        console.log(authResponse)
        secure.set('inventory@access-token', { data: authResponse.access_token })
        setUser(authResponse.user);
      }

      return authResponse.user;
    } catch (e) {
      return undefined;
    }
  };

  const logout = () => {
    secure.clear();
    setUser(undefined);

    window.location.href = `${import.meta.env.VITE_APP_PUBLIC}` || '';
  };

  const getUser = async (): Promise<void> => {
    const userResponse = await userData();
    if (userResponse) {
      setUser(userResponse);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        auth,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
