import { createContext } from 'react';
import { LoadingContextData } from './interfaces/loading-context-props.interface';

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export default LoadingContext;
