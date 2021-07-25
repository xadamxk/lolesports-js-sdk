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
import {HighlanderTeam} from './HighlanderTeam';
import {HighlanderTournament} from './HighlanderTournament';
import {InlineResponse20015PlayerStatsHistories} from './InlineResponse20015PlayerStatsHistories';
import {InlineResponse20015PlayerStatsSummaries} from './InlineResponse20015PlayerStatsSummaries';
import {MatchScheduleItem} from './MatchScheduleItem';

/**
 * The InlineResponse20015 model module.
 * @module model/InlineResponse20015
 * @version 1.0.0-alpha-1
 */
export class InlineResponse20015 {
  /**
   * Constructs a new <code>InlineResponse20015</code>.
   * @alias module:model/InlineResponse20015
   * @class
   * @param players {Array.<Object>} Contains information about the player in question.  If `playerStatsSummary` and `playerStatsHistory` are missing then the player did not take part in the tournament specificed by the tournament ID in the url. 
   * @param highlanderTournaments {Array.<module:model/HighlanderTournament>} Contains the various tournaments the player has participated in. 
   * @param scheduleItems {Array.<module:model/MatchScheduleItem>} Contains details about the next 4 matches the player's team is schedule to participate in. 
   * @param teams {Array.<module:model/HighlanderTeam>} 
   */
  constructor(players, highlanderTournaments, scheduleItems, teams) {
    this.players = players;
    this.highlanderTournaments = highlanderTournaments;
    this.scheduleItems = scheduleItems;
    this.teams = teams;
  }

  /**
   * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20015} obj Optional instance to populate.
   * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20015();
      if (data.hasOwnProperty('players'))
        obj.players = ApiClient.convertToType(data['players'], [AllOfinlineResponse20015PlayersItems]);
      if (data.hasOwnProperty('highlanderTournaments'))
        obj.highlanderTournaments = ApiClient.convertToType(data['highlanderTournaments'], [HighlanderTournament]);
      if (data.hasOwnProperty('scheduleItems'))
        obj.scheduleItems = ApiClient.convertToType(data['scheduleItems'], [MatchScheduleItem]);
      if (data.hasOwnProperty('teams'))
        obj.teams = ApiClient.convertToType(data['teams'], [HighlanderTeam]);
      if (data.hasOwnProperty('playerStatsSummaries'))
        obj.playerStatsSummaries = ApiClient.convertToType(data['playerStatsSummaries'], [InlineResponse20015PlayerStatsSummaries]);
      if (data.hasOwnProperty('playerStatsHistories'))
        obj.playerStatsHistories = ApiClient.convertToType(data['playerStatsHistories'], [InlineResponse20015PlayerStatsHistories]);
    }
    return obj;
  }
}

/**
 * Contains information about the player in question.  If `playerStatsSummary` and `playerStatsHistory` are missing then the player did not take part in the tournament specificed by the tournament ID in the url. 
 * @member {Array.<Object>} players
 */
InlineResponse20015.prototype.players = undefined;

/**
 * Contains the various tournaments the player has participated in. 
 * @member {Array.<module:model/HighlanderTournament>} highlanderTournaments
 */
InlineResponse20015.prototype.highlanderTournaments = undefined;

/**
 * Contains details about the next 4 matches the player's team is schedule to participate in. 
 * @member {Array.<module:model/MatchScheduleItem>} scheduleItems
 */
InlineResponse20015.prototype.scheduleItems = undefined;

/**
 * @member {Array.<module:model/HighlanderTeam>} teams
 */
InlineResponse20015.prototype.teams = undefined;

/**
 * The stats displayed here are for the player during the tournament specified in the url 
 * @member {Array.<module:model/InlineResponse20015PlayerStatsSummaries>} playerStatsSummaries
 */
InlineResponse20015.prototype.playerStatsSummaries = undefined;

/**
 * Displays stats from the recently played matches in that particular tournaments. The array starts with the most recently played match. 
 * @member {Array.<module:model/InlineResponse20015PlayerStatsHistories>} playerStatsHistories
 */
InlineResponse20015.prototype.playerStatsHistories = undefined;
