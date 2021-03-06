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
 * The ScheduleItem model module.
 * @module model/ScheduleItem
 * @version 1.0.0-alpha-1
 */
export class ScheduleItem {
  /**
   * Constructs a new <code>ScheduleItem</code>.
   * @alias module:model/ScheduleItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ScheduleItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduleItem} obj Optional instance to populate.
   * @return {module:model/ScheduleItem} The populated <code>ScheduleItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ScheduleItem();
    }
    return obj;
  }
}
// Implement OneOfscheduleItem interface:
