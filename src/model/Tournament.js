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
 * The Tournament model module.
 * @module model/Tournament
 * @version 1.0.0-alpha-1
 */
export class Tournament {
  /**
   * Constructs a new <code>Tournament</code>.
   * @alias module:model/Tournament
   * @class
   * @param endDate {String} The date the tournament ends/ended.
   * @param id {String} This is the tournament id
   * @param slug {String} 
   * @param startDate {String} The date the tournament starts/started.
   */
  constructor(endDate, id, slug, startDate) {
    this.endDate = endDate;
    this.id = id;
    this.slug = slug;
    this.startDate = startDate;
  }

  /**
   * Constructs a <code>Tournament</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tournament} obj Optional instance to populate.
   * @return {module:model/Tournament} The populated <code>Tournament</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tournament();
      if (data.hasOwnProperty('endDate'))
        obj.endDate = ApiClient.convertToType(data['endDate'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('slug'))
        obj.slug = ApiClient.convertToType(data['slug'], 'String');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
    }
    return obj;
  }
}

/**
 * The date the tournament ends/ended.
 * @member {String} endDate
 */
Tournament.prototype.endDate = undefined;

/**
 * This is the tournament id
 * @member {String} id
 */
Tournament.prototype.id = undefined;

/**
 * @member {String} slug
 */
Tournament.prototype.slug = undefined;

/**
 * The date the tournament starts/started.
 * @member {String} startDate
 */
Tournament.prototype.startDate = undefined;
