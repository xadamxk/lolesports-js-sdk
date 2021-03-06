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
import {HighlanderTournament} from './HighlanderTournament';

/**
 * The HighlanderTournaments model module.
 * @module model/HighlanderTournaments
 * @version 1.0.0-alpha-1
 */
export class HighlanderTournaments extends Array {
  /**
   * Constructs a new <code>HighlanderTournaments</code>.
   * @alias module:model/HighlanderTournaments
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>HighlanderTournaments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HighlanderTournaments} obj Optional instance to populate.
   * @return {module:model/HighlanderTournaments} The populated <code>HighlanderTournaments</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HighlanderTournaments();
      ApiClient.constructFromObject(data, obj, 'HighlanderTournament');
    }
    return obj;
  }
}
