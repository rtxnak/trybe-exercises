import { ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interface';
import connection from '../model/connection';

export default class ProductsModel {
  // public connection: Pool;

  // constructor(connection: Pool) {
  //   this.connection = connection;
  // }

  public async getAll(): Promise<Product[]> {
    const result = await connection
      .execute('SELECT * FROM Products');
    const [rows] = result;
    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, brand, price, manufacturing_date, expiration_date } = product;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Products (name, brand, price, manufacturing_date, expiration_date) VALUES (?, ?, ?, ?, ?)',
      [name, brand, price, manufacturing_date, expiration_date]
    )
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return {id: insertId, ...product };
  }
}