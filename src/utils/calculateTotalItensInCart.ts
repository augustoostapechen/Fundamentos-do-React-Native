interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const totalItensInCart = (products: Product[]): number => {
  const total = products.reduce((accumulator, product) => {
    const totalItens = product.quantity;
    return accumulator + totalItens;
  }, 0);

  return total;
};

export default totalItensInCart;
