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
import {InlineResponse2001DataSchedule} from './InlineResponse2001DataSchedule';

/**
 * The InlineResponse2001Data model module.
 * @module model/InlineResponse2001Data
 * @version 1.0.0-alpha-1
 */
export class InlineResponse2001Data {
  /**
   * Constructs a new <code>InlineResponse2001Data</code>.
   * @alias module:model/InlineResponse2001Data
   * @class
   * @param schedule {module:model/InlineResponse2001DataSchedule} 
   */
  constructor(schedule) {
    this.schedule = schedule;
  }

  /**
   * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2001Data();
      if (data.hasOwnProperty('schedule'))
        obj.schedule = InlineResponse2001DataSchedule.constructFromObject(data['schedule']);
    }
    return obj;
  }
}

/**
 * @member {module:model/InlineResponse2001DataSchedule} schedule
 */
InlineResponse2001Data.prototype.schedule = undefined;

