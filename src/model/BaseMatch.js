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
import {Teams} from './Teams';

/**
 * The BaseMatch model module.
 * @module model/BaseMatch
 * @version 1.0.0-alpha-1
 */
export class BaseMatch {
  /**
   * Constructs a new <code>BaseMatch</code>.
   * @alias module:model/BaseMatch
   * @class
   * @param teams {module:model/Teams} 
   */
  constructor(teams) {
    this.teams = teams;
  }

  /**
   * Constructs a <code>BaseMatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseMatch} obj Optional instance to populate.
   * @return {module:model/BaseMatch} The populated <code>BaseMatch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BaseMatch();
      if (data.hasOwnProperty('teams'))
        obj.teams = Teams.constructFromObject(data['teams']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Teams} teams
 */
BaseMatch.prototype.teams = undefined;
