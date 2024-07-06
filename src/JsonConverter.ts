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
        return JSON.stringify(data);
    }

    /**
     * Deserialize string to object
     * @param {string} json
     * @returns {T}
     */
    public static deserialize<T>(json: string): T {
        return JSON.parse(json) as T;
    }
}
