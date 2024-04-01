import React from 'react';
import * as S from './styles';
import { IButton } from '@/components/interfaces/button';

export const Button: React.FC<IButton> = (props) => <S.Button {...props}>{props.text}</S.Button>;
