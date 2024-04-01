import React from 'react';
import * as S from './styles';
import { IInput } from '@/components/interfaces/input';

export const Input: React.FC<IInput> = (props) => (
  <S.Container>
    {props.label && <S.Label htmlFor={props.id}>{props.label}</S.Label>}
    <S.Input {...props} />
  </S.Container>
);
