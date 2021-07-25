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
 * The ScoringOptions model module.
 * @module model/ScoringOptions
 * @version 1.0.0-alpha-1
 */
export class ScoringOptions {
  /**
   * Constructs a new <code>ScoringOptions</code>.
   * @alias module:model/ScoringOptions
   * @class
   * @param points {Array.<Number>} 
   */
  constructor(points) {
    this.points = points;
  }

  /**
   * Constructs a <code>ScoringOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScoringOptions} obj Optional instance to populate.
   * @return {module:model/ScoringOptions} The populated <code>ScoringOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ScoringOptions();
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], ['Number']);
    }
    return obj;
  }
}

/**
 * @member {Array.<Number>} points
 */
ScoringOptions.prototype.points = undefined;
