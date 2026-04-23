import ProductsClient from './ProductsClient';

async function getProducts() {
  const response = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data;
}

export default async function Products() {
  const products = await getProducts();
  return <ProductsClient products={products} />;
}
