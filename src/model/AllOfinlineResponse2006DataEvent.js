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
import {BaseEvent} from './BaseEvent';
import {EventType} from './EventType';
import {ExtendedVod} from './ExtendedVod';
import {SimpleLeague} from './SimpleLeague';

/**
 * The AllOfinlineResponse2006DataEvent model module.
 * @module model/AllOfinlineResponse2006DataEvent
 * @version 1.0.0-alpha-1
 */
export class AllOfinlineResponse2006DataEvent extends BaseEvent {
  /**
   * Constructs a new <code>AllOfinlineResponse2006DataEvent</code>.
   * @alias module:model/AllOfinlineResponse2006DataEvent
   * @class
   * @extends module:model/BaseEvent
   * @param match {} 
   * @param id {} 
   * @param type {} 
   * @param league {} 
   * @param streams {} For a live match this will contain information about various streams, the platforms they are on and the locale.  Otherwise it will be null. 
   */
  constructor(match, id, type, league, streams) {
    super();
    this.id = id;
    this.type = type;
    this.league = league;
    this.match = match;
    this.streams = streams;
  }

  /**
   * Constructs a <code>AllOfinlineResponse2006DataEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfinlineResponse2006DataEvent} obj Optional instance to populate.
   * @return {module:model/AllOfinlineResponse2006DataEvent} The populated <code>AllOfinlineResponse2006DataEvent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfinlineResponse2006DataEvent();
      BaseEvent.constructFromObject(data, obj);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = EventType.constructFromObject(data['type']);
      if (data.hasOwnProperty('league'))
        obj.league = SimpleLeague.constructFromObject(data['league']);
      if (data.hasOwnProperty('match'))
        obj.match = ApiClient.convertToType(data['match'], Object);
      if (data.hasOwnProperty('streams'))
        obj.streams = ApiClient.convertToType(data['streams'], [ExtendedVod]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
AllOfinlineResponse2006DataEvent.prototype.id = undefined;

/**
 * @member {module:model/EventType} type
 */
AllOfinlineResponse2006DataEvent.prototype.type = undefined;

/**
 * @member {module:model/SimpleLeague} league
 */
AllOfinlineResponse2006DataEvent.prototype.league = undefined;

/**
 * @member {Object} match
 */
AllOfinlineResponse2006DataEvent.prototype.match = undefined;

/**
 * For a live match this will contain information about various streams, the platforms they are on and the locale.  Otherwise it will be null. 
 * @member {Array.<module:model/ExtendedVod>} streams
 */
AllOfinlineResponse2006DataEvent.prototype.streams = undefined;
