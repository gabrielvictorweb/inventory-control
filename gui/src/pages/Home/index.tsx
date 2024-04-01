import { getProducts } from '@/services/products';
import { ProductsResponse } from '@/services/products/interfaces';
import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { Button } from '@/components';

export const Home: React.FC = () => {
  const [products, setProducts] = React.useState<ProductsResponse>();
  const [page, setPage] = React.useState(0);

  const loadProducts = async (page: number) => {
    const responseProduct = await getProducts(page);
    setProducts(responseProduct);
  }

  const listProducts = () => {
    if (!products) return <></>;

    return products.products.map(product => (
      <S.Product>
        <Link to={`product/${product.id}`}>
          <img title={product.name} alt={product.name} src={product.image} />
        </Link>

        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Preço: R$ {product.price}</p>
        <p>Disponível: {product.stock}</p>

        <Link to={`product/${product.id}`}>
          <Button text='COMPRAR' />
        </Link>
      </S.Product>
    ));
  }

  const handlePage = (page: number) => {
    setPage(page);
  }

  const getPagination = () => {
    if (!products) return <></>;

    const pages: number[] = [];
    const totalPages = Math.ceil(products.total / products.perPage);

    console.log(totalPages);

    for (let contador = 0; contador < totalPages; contador++) {
      pages.push(contador)
    }

    return (
      <S.Pagination>
        {pages?.map(page => <li onClick={() => handlePage(page)} className={page === products.page ? 'active' : ''}>{page + 1}</li>)}
      </S.Pagination>
    );
  }

  React.useEffect(() => {
    loadProducts(page);
  }, [page]);

  return (
    <S.Container>
      <S.Grid>
        {listProducts()}
      </S.Grid>

      {getPagination()}

    </S.Container>
  );
};
