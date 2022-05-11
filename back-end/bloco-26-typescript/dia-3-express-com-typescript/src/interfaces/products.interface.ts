interface Product {
  id?: number;
  name: string;
  brand: string;
  price: number;
  manufacturing_date: Date;
  expiration_date: Date;
}

export default Product;