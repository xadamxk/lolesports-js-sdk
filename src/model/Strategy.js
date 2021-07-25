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
import {BaseStrategy} from './BaseStrategy';

/**
 * The Strategy model module.
 * @module model/Strategy
 * @version 1.0.0-alpha-1
 */
export class Strategy extends BaseStrategy {
  /**
   * Constructs a new <code>Strategy</code>.
   * @alias module:model/Strategy
   * @class
   * @extends module:model/BaseStrategy
   * @param count {} 
   * @param type {} 
   */
  constructor(count, type) {
    super(count);
    this.type = type;
  }

  /**
   * Constructs a <code>Strategy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Strategy} obj Optional instance to populate.
   * @return {module:model/Strategy} The populated <code>Strategy</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Strategy();
      BaseStrategy.constructFromObject(data, obj);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Strategy.TypeEnum = {
  /**
   * value: "bestOf"
   * @const
   */
  bestOf: "bestOf"
};
/**
 * @member {module:model/Strategy.TypeEnum} type
 */
Strategy.prototype.type = undefined;

