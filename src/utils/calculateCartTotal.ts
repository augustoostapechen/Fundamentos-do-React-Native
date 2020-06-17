interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const cartTotal = (products: Product[]): number => {
  const total = products.reduce((accumulator, product) => {
    const productsSubTotal = product.price * product.quantity;
    return accumulator + productsSubTotal;
  }, 0);

  return total;
};

export default cartTotal;
