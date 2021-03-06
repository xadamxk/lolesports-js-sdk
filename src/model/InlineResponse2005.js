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
import {InlineResponse2005Data} from './InlineResponse2005Data';

/**
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 1.0.0-alpha-1
 */
export class InlineResponse2005 {
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   * @class
   * @param data {module:model/InlineResponse2005Data} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2005();
      if (data.hasOwnProperty('data'))
        obj.data = InlineResponse2005Data.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/InlineResponse2005Data} data
 */
InlineResponse2005.prototype.data = undefined;

