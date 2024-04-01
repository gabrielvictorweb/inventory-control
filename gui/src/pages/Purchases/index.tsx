import React from 'react';
import * as S from './styles';
import { Button } from '@/components';
import { PurchaseInterface } from '@/services/purchases/interfaces';
import { getPurchases } from '@/services/purchases';

export const Purchases: React.FC = () => {
    const [purchases, setPurchases] = React.useState<PurchaseInterface[]>();

    const loadPurchases = async () => {
        const response = await getPurchases();
        setPurchases(response);
    }

    const getStatus = (id: number) => {
        switch (id) {
            case 1:
                return 'Cancelado';
            case 2:
                return 'Entregue';
            case 3:
                return 'Processando';
        }
    }

    const listPurchases = () => {
        if (!purchases) return <></>;

        return purchases.map(purchase =>
            <tr>
                <td>{purchase.id}</td>
                <td>{purchase.product.name}</td>
                <td>{purchase.quantity}</td>
                <td>R$ {purchase.price}</td>
                <td>{getStatus(purchase.statusPurchaseId)}</td>
                <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(purchase.createdAt))}</td>
            </tr>
        );
    }

    React.useEffect(() => {
        loadPurchases();
    }, []);

    return (
        <S.Container>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Status</th>
                    <th>Relizado em</th>
                </tr>
                {listPurchases()}
            </table>
        </S.Container>
    );
};
