import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import useUser from '@/hooks/useUser';

export const MainMenu: React.FC = () => {
  const { logout } = useUser();

  return (
    <S.Container>
      <div>
        <S.Logo>INVENTORY CONTROL</S.Logo>

        <nav>
          <S.List>
            <li>
              <Link title="Produtos" to="/dashboard/products">
                Produtos
              </Link>
            </li>
          </S.List>
        </nav>
      </div>
      <div>
        <S.Hr />
        <S.List>
          <li>
            <Link onClick={logout} title="Sair" to="#logout">
              Sair
            </Link>
          </li>
        </S.List>
      </div>
    </S.Container>
  );
};
