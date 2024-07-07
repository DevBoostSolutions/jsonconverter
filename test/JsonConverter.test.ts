import { JsonConverter } from '../src';
import { User, Product, Order } from './type';
import { describe, expect, it } from '@jest/globals';

describe('Test package JsonConverter', () => {
  describe('serialize', () => {
    // Serialize simple object to string: User
    it('Serialize simple object to string', () => {
      const data: User = { id: 1, name: 'John', email: '', age: 30 };
      const expectedJson = '{"id":1,"name":"John","email":"","age":30}';

      const result = JsonConverter.serialize(data);

      expect(result).toEqual(expectedJson);
    });

    // Serialize simple nested object to string: Product
    it('Serialize simple nested object to string', () => {
      const data =  { id: 2, name: 'Product 2', price: 200, quantity: 2, category: { id: 2, name: 'Category 2' } };;
      const expectedJson = '{"id":2,"name":"Product 2","price":200,"quantity":2,"category":{"id":2,"name":"Category 2"}}';
      
      const result = JsonConverter.serialize(data);
      
      expect(result).toEqual(expectedJson);
    });

    // Serialize complex nested object to string: Order
    it('Serialize complex nested object to string', () => {
      const data: Order = {
        id: 1,
        user: { id: 1, name: 'John', email: '', age: 30 },
        products: [
          { id: 1, name: 'Product 1', price: 100, quantity: 1, category: { id: 1, name: 'Category 1' } },
          { id: 2, name: 'Product 2', price: 200, quantity: 2, category: { id: 2, name: 'Category 2' } }
        ]
      };
      const expectedJson = '{"id":1,"user":{"id":1,"name":"John","email":"","age":30},"products":[{"id":1,"name":"Product 1","price":100,"quantity":1,"category":{"id":1,"name":"Category 1"}},{"id":2,"name":"Product 2","price":200,"quantity":2,"category":{"id":2,"name":"Category 2"}}]}';

      const result = JsonConverter.serialize(data);

      expect(result).toEqual(expectedJson);
    });
  });

  describe('deserialize', () => {
    // Deserialize simple object from string: User
    it('Deserialize simple object from string', () => {
      const json = '{"id":1,"name":"John","email":"","age":30}';
      const expectedData: User = { id: 1, name: 'John', email: '', age: 30 };

      const result = JsonConverter.deserialize<Product>(json);

      // Expected data is equal to result
      expect(result).toEqual(expectedData);

      // Expected data is not reference to result
      expect(result).not.toBe(expectedData);

      // Expected data is deep equal to result
      expect(result).toStrictEqual(expectedData);
    });

    // Deserialize simple nested object from string: Product
    it('Deserialize simple nested object from string', () => {
      const json = '{"id":2,"name":"Product 2","price":200,"quantity":2,"category":{"id":2,"name":"Category 2"}}';
      const expectedData = { id: 2, name: 'Product 2', price: 200, quantity: 2, category: { id: 2, name: 'Category 2' } };

      const result = JsonConverter.deserialize(json);

      // Expected data is equal to result
      expect(result).toEqual(expectedData);

      // Expected data is not reference to result
      expect(result).not.toBe(expectedData);

      // Expected data is deep equal to result
      expect(result).toStrictEqual(expectedData);
    });

    // Deserialize complex nested object from string: Order
    it('Deserialize complex nested object from string', () => {
      const json = '{"id":1,"user":{"id":1,"name":"John","email":"","age":30},"products":[{"id":1,"name":"Product 1","price":100,"quantity":1,"category":{"id":1,"name":"Category 1"}},{"id":2,"name":"Product 2","price":200,"quantity":2,"category":{"id":2,"name":"Category 2"}}]}';
      const expectedData: Order = {
        id: 1,
        user: { id: 1, name: 'John', email: '', age: 30 },
        products: [
          { id: 1, name: 'Product 1', price: 100, quantity: 1, category: { id: 1, name: 'Category 1' } },
          { id: 2, name: 'Product 2', price: 200, quantity: 2, category: { id: 2, name: 'Category 2' } }
        ]
      };

      const result = JsonConverter.deserialize(json);

      // Expected data is equal to result
      expect(result).toEqual(expectedData);

      // Expected data is not reference to result
      expect(result).not.toBe(expectedData);

      // Expected data is deep equal to result
      expect(result).toStrictEqual(expectedData);
    });
  });
});