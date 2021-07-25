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
import {BaseScheduleItem} from './BaseScheduleItem';
import {Tags} from './Tags';

/**
 * The MatchScheduleItem model module.
 * @module model/MatchScheduleItem
 * @version 1.0.0-alpha-1
 */
export class MatchScheduleItem extends BaseScheduleItem {
  /**
   * Constructs a new <code>MatchScheduleItem</code>.
   * @alias module:model/MatchScheduleItem
   * @class
   * @extends module:model/BaseScheduleItem
   * @param id {} The schedule item ID.
   * @param scheduledTime {} The time the match/event is/was scheduled to start.
   * @param tags {} 
   * @param tournament {} The tournament ID
   * @param league {} The League ID
   * @param content {} Contains the tournament and match Ids for the specific match. 
   * @param match {} The match ID
   * @param bracket {} The bracket ID
   */
  constructor(id, scheduledTime, tags, tournament, league, content, match, bracket) {
    super(id, scheduledTime, tags, tournament, league);
    this.content = content;
    this.match = match;
    this.bracket = bracket;
  }

  /**
   * Constructs a <code>MatchScheduleItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchScheduleItem} obj Optional instance to populate.
   * @return {module:model/MatchScheduleItem} The populated <code>MatchScheduleItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MatchScheduleItem();
      BaseScheduleItem.constructFromObject(data, obj);
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('match'))
        obj.match = ApiClient.convertToType(data['match'], 'String');
      if (data.hasOwnProperty('bracket'))
        obj.bracket = ApiClient.convertToType(data['bracket'], 'String');
    }
    return obj;
  }
}

/**
 * Contains the tournament and match Ids for the specific match. 
 * @member {String} content
 */
MatchScheduleItem.prototype.content = undefined;

/**
 * The match ID
 * @member {String} match
 */
MatchScheduleItem.prototype.match = undefined;

/**
 * The bracket ID
 * @member {String} bracket
 */
MatchScheduleItem.prototype.bracket = undefined;

// Implement OneOfscheduleItem interface:
