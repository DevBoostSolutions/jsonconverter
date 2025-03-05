/**
 * JsonConverter class
 * @class JsonConverter
 * @description JsonConverter class for serialize and deserialize data
 * @implements IJsonConverter
 * @template T
 * @author LongVQ
 * @date 2024-07-05
 * @version 1.0.0
 */
export class JsonConverter {
  /**
   * Serialize data to string
   * @param {T} data
   * @returns {string}
   */
  public static serialize<T>(data: T): string {
    try {
      if (data === undefined) {
        throw new Error('Data cannot be undefined');
      }
      return JSON.stringify(data);
    } catch (error) {
      throw new Error(`Failed to serialize data: ${error.message}`);
    }
  }

  /**
   * Deserialize string to object
   * @param {string} json
   * @returns {T}
   */
  public static deserialize<T>(json: string, validateFn?: (data: any) => boolean): T {
    try {
      if (!json) {
        throw new Error('Input JSON string cannot be empty');
      }
      const parsed = JSON.parse(json);
      if (validateFn && !validateFn(parsed)) {
        throw new Error('Invalid type structure');
      }
      return parsed as T;
    } catch (error) {
      throw new Error(`Failed to deserialize JSON: ${error.message}`);
    }
  }
}
