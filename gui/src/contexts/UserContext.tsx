import { createContext } from 'react';
import { UserContextData } from './interfaces/user-context-props.interface';

const UserContext = createContext<UserContextData>({} as UserContextData);

export default UserContext;
