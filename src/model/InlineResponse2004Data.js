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
import {InlineResponse2004DataStandings} from './InlineResponse2004DataStandings';

/**
 * The InlineResponse2004Data model module.
 * @module model/InlineResponse2004Data
 * @version 1.0.0-alpha-1
 */
export class InlineResponse2004Data {
  /**
   * Constructs a new <code>InlineResponse2004Data</code>.
   * @alias module:model/InlineResponse2004Data
   * @class
   * @param standings {Array.<module:model/InlineResponse2004DataStandings>} Each object in the array contains details of each tournament requested. 
   */
  constructor(standings) {
    this.standings = standings;
  }

  /**
   * Constructs a <code>InlineResponse2004Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004Data} The populated <code>InlineResponse2004Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2004Data();
      if (data.hasOwnProperty('standings'))
        obj.standings = ApiClient.convertToType(data['standings'], [InlineResponse2004DataStandings]);
    }
    return obj;
  }
}

/**
 * Each object in the array contains details of each tournament requested. 
 * @member {Array.<module:model/InlineResponse2004DataStandings>} standings
 */
InlineResponse2004Data.prototype.standings = undefined;

