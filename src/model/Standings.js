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
import {HighlanderResult} from './HighlanderResult';

/**
 * The Standings model module.
 * @module model/Standings
 * @version 1.0.0-alpha-1
 */
export class Standings {
  /**
   * Constructs a new <code>Standings</code>.
   * @alias module:model/Standings
   * @class
   * @param result {module:model/HighlanderResult} 
   * @param timestamp {Number} Unix timestamp in milliseconds of when the match started.
   * @param closed {Boolean} If the value is true then the league/tournament has concluded, otherwise it is ongoing. 
   */
  constructor(result, timestamp, closed) {
    this.result = result;
    this.timestamp = timestamp;
    this.closed = closed;
  }

  /**
   * Constructs a <code>Standings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Standings} obj Optional instance to populate.
   * @return {module:model/Standings} The populated <code>Standings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Standings();
      if (data.hasOwnProperty('result'))
        obj.result = HighlanderResult.constructFromObject(data['result']);
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Number');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('history'))
        obj.history = ApiClient.convertToType(data['history'], [Standings]);
      if (data.hasOwnProperty('closed'))
        obj.closed = ApiClient.convertToType(data['closed'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {module:model/HighlanderResult} result
 */
Standings.prototype.result = undefined;

/**
 * Unix timestamp in milliseconds of when the match started.
 * @member {Number} timestamp
 */
Standings.prototype.timestamp = undefined;

/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
Standings.SourceEnum = {
  /**
   * value: "manual"
   * @const
   */
  manual: "manual",

  /**
   * value: "bestOf"
   * @const
   */
  bestOf: "bestOf"
};
/**
 * How the record was created/updated.
 * @member {module:model/Standings.SourceEnum} source
 */
Standings.prototype.source = undefined;

/**
 * @member {String} note
 */
Standings.prototype.note = undefined;

/**
 * @member {Array.<module:model/Standings>} history
 */
Standings.prototype.history = undefined;

/**
 * If the value is true then the league/tournament has concluded, otherwise it is ongoing. 
 * @member {Boolean} closed
 */
Standings.prototype.closed = undefined;

