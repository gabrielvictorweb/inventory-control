export interface Product {
  id: number
  name: string
  description: string
  image: string
  price: string
  stock: number
}

export interface ProductsResponse {
  products: Product[];
  perPage: number;
  page: number;
  total: number;
}