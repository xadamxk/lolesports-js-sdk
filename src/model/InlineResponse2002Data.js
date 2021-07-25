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
import {InlineResponse2002DataSchedule} from './InlineResponse2002DataSchedule';

/**
 * The InlineResponse2002Data model module.
 * @module model/InlineResponse2002Data
 * @version 1.0.0-alpha-1
 */
export class InlineResponse2002Data {
  /**
   * Constructs a new <code>InlineResponse2002Data</code>.
   * @alias module:model/InlineResponse2002Data
   * @class
   * @param schedule {module:model/InlineResponse2002DataSchedule} 
   */
  constructor(schedule) {
    this.schedule = schedule;
  }

  /**
   * Constructs a <code>InlineResponse2002Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002Data} The populated <code>InlineResponse2002Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2002Data();
      if (data.hasOwnProperty('schedule'))
        obj.schedule = InlineResponse2002DataSchedule.constructFromObject(data['schedule']);
    }
    return obj;
  }
}

/**
 * @member {module:model/InlineResponse2002DataSchedule} schedule
 */
InlineResponse2002Data.prototype.schedule = undefined;

