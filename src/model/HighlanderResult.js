/*
 * Lolesports Api
 * Unofficial documentation to the lolesports Api
 *
 * OpenAPI spec version: 1.0.0-alpha-1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The HighlanderResult model module.
 * @module model/HighlanderResult
 * @version 1.0.0-alpha-1
 */
export class HighlanderResult extends Array {
  /**
   * Constructs a new <code>HighlanderResult</code>.
   * @alias module:model/HighlanderResult
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>HighlanderResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HighlanderResult} obj Optional instance to populate.
   * @return {module:model/HighlanderResult} The populated <code>HighlanderResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HighlanderResult();
      ApiClient.constructFromObject(data, obj, 'Array');
    }
    return obj;
  }
}