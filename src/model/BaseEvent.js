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
import {BaseMatch} from './BaseMatch';

/**
 * The BaseEvent model module.
 * @module model/BaseEvent
 * @version 1.0.0-alpha-1
 */
export class BaseEvent {
  /**
   * Constructs a new <code>BaseEvent</code>.
   * @alias module:model/BaseEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BaseEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseEvent} obj Optional instance to populate.
   * @return {module:model/BaseEvent} The populated <code>BaseEvent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BaseEvent();
      if (data.hasOwnProperty('match'))
        obj.match = BaseMatch.constructFromObject(data['match']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BaseMatch} match
 */
BaseEvent.prototype.match = undefined;

