import React from 'react';
import * as S from './styles';
import { Button } from '@/components';
import { Link } from 'react-router-dom';

export const SuccessOrder: React.FC = () => {
    return (
        <S.Container>
            <S.Title>Pedido realizado com sucesso!</S.Title>
            <Link to="/purchases">
                <Button text="VER MEUS PEDIDOS" />
            </Link>
        </S.Container>
    );
};
