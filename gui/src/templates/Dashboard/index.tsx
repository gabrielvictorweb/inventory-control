import React from 'react';
import { IChild } from '../interfaces/default-props';
import { Activities, MainMenu } from '@/components';
import * as S from './styles';

export const DashboardLayout: React.FC<IChild> = ({ children }) => {
  return (
    <>
      <S.Container>
        <S.MenuContainer>
          <MainMenu />
        </S.MenuContainer>

        <S.Content>{children}</S.Content>

        <S.Body />
      </S.Container>

      <Activities />
    </>
  );
};
