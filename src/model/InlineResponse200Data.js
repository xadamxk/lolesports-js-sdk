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
 * The InlineResponse200Data model module.
 * @module model/InlineResponse200Data
 * @version 1.0.0-alpha-1
 */
export class InlineResponse200Data {
  /**
   * Constructs a new <code>InlineResponse200Data</code>.
   * @alias module:model/InlineResponse200Data
   * @class
   * @param leagues {Array.<Object>} 
   */
  constructor(leagues) {
    this.leagues = leagues;
  }

  /**
   * Constructs a <code>InlineResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Data} The populated <code>InlineResponse200Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200Data();
      if (data.hasOwnProperty('leagues'))
        obj.leagues = ApiClient.convertToType(data['leagues'], [AllOfinlineResponse200DataLeaguesItems]);
    }
    return obj;
  }
}

/**
 * @member {Array.<Object>} leagues
 */
InlineResponse200Data.prototype.leagues = undefined;

