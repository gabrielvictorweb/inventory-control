import React from 'react';
import { IChild } from '../interfaces/default-props';
import * as S from './styles';
import useUser from '@/hooks/useUser';
import { Link } from 'react-router-dom';

export const BaseLayout: React.FC<IChild> = ({ children }) => {
  const { user, logout } = useUser();

  const userOptions = () => {
    if (user) {
      return (
        <S.Options>
          <p>Olá, {user.name}! |</p>
          <Link to="/purchases">PEDIDOS</Link>
          <Link to="#logout" onClick={logout}>SAIR</Link>
        </S.Options>
      )
    }

    return (
      <S.Options>
        <Link to="/signin">ENTRAR</Link>
      </S.Options>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <Link to="/">
          <h1>Inventory Control</h1>
        </Link>

        {userOptions()}
      </S.Header>
      {children}
    </S.Container>
  );
};
