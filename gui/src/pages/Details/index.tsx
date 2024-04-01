import { Product } from '@/services/products/interfaces';
import React from 'react';
import * as S from './styles';
import { getProduct } from '@/services/products';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components';
import { savePurchase } from '@/services/purchases';
import { useFormik } from 'formik';

export const Details: React.FC = () => {
  const [product, setProduct] = React.useState<Product>();

  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      quantity: 1
    },
    onSubmit: values => {
      handlePurchase(values.quantity)
    },
  });

  const loadProduct = async () => {
    if (!id) return;

    const responseProduct = await getProduct(id);
    setProduct(responseProduct);
  }

  const handlePurchase = async (quantity: number) => {
    if (!id) return;

    try {
      const response = await savePurchase(+id, quantity);
      if (!response) {
        throw new Error('Order error!');
      }

      navigate('/success-order');
    } catch (e) {
      navigate('/error-order');
    }
  }

  React.useEffect(() => {
    loadProduct();
  }, [id]);

  if (!product) return <></>;

  return (
    <S.Container>
      <S.Grid>
        <div>
          <img src={product.image} />
        </div>
        <S.Product>
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
            <p>Disponível: {product.stock}</p>
          </div>
          <div>
            <S.Form onSubmit={formik.handleSubmit}>
              <label>Quantidade:</label>
              <input
                name="quantity"
                onChange={formik.handleChange}
                value={formik.values.quantity}
                type="number"
                required
              />
              <Button text="COMPRE COM UM CLICK" />
            </S.Form>
          </div>
        </S.Product>
      </S.Grid>
    </S.Container>
  );
};
