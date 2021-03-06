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
 * The InlineResponse20014TeamRosterStats model module.
 * @module model/InlineResponse20014TeamRosterStats
 * @version 1.0.0-alpha-1
 */
export class InlineResponse20014TeamRosterStats {
  /**
   * Constructs a new <code>InlineResponse20014TeamRosterStats</code>.
   * @alias module:model/InlineResponse20014TeamRosterStats
   * @class
   * @param playerId {String} 
   * @param gamesPlayed {Number} 
   * @param averageAssists {Number} 
   * @param averageDeaths {Number} 
   * @param averageKillParticipation {Number} 
   * @param averageKills {Number} 
   * @param summonerName {String} 
   * @param championIds {Array.<Number>} 
   */
  constructor(playerId, gamesPlayed, averageAssists, averageDeaths, averageKillParticipation, averageKills, summonerName, championIds) {
    this.playerId = playerId;
    this.gamesPlayed = gamesPlayed;
    this.averageAssists = averageAssists;
    this.averageDeaths = averageDeaths;
    this.averageKillParticipation = averageKillParticipation;
    this.averageKills = averageKills;
    this.summonerName = summonerName;
    this.championIds = championIds;
  }

  /**
   * Constructs a <code>InlineResponse20014TeamRosterStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014TeamRosterStats} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014TeamRosterStats} The populated <code>InlineResponse20014TeamRosterStats</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20014TeamRosterStats();
      if (data.hasOwnProperty('playerId'))
        obj.playerId = ApiClient.convertToType(data['playerId'], 'String');
      if (data.hasOwnProperty('gamesPlayed'))
        obj.gamesPlayed = ApiClient.convertToType(data['gamesPlayed'], 'Number');
      if (data.hasOwnProperty('averageAssists'))
        obj.averageAssists = ApiClient.convertToType(data['averageAssists'], 'Number');
      if (data.hasOwnProperty('averageDeaths'))
        obj.averageDeaths = ApiClient.convertToType(data['averageDeaths'], 'Number');
      if (data.hasOwnProperty('averageKillParticipation'))
        obj.averageKillParticipation = ApiClient.convertToType(data['averageKillParticipation'], 'Number');
      if (data.hasOwnProperty('averageKills'))
        obj.averageKills = ApiClient.convertToType(data['averageKills'], 'Number');
      if (data.hasOwnProperty('summonerName'))
        obj.summonerName = ApiClient.convertToType(data['summonerName'], 'String');
      if (data.hasOwnProperty('championIds'))
        obj.championIds = ApiClient.convertToType(data['championIds'], ['Number']);
    }
    return obj;
  }
}

/**
 * @member {String} playerId
 */
InlineResponse20014TeamRosterStats.prototype.playerId = undefined;

/**
 * @member {Number} gamesPlayed
 */
InlineResponse20014TeamRosterStats.prototype.gamesPlayed = undefined;

/**
 * @member {Number} averageAssists
 */
InlineResponse20014TeamRosterStats.prototype.averageAssists = undefined;

/**
 * @member {Number} averageDeaths
 */
InlineResponse20014TeamRosterStats.prototype.averageDeaths = undefined;

/**
 * @member {Number} averageKillParticipation
 */
InlineResponse20014TeamRosterStats.prototype.averageKillParticipation = undefined;

/**
 * @member {Number} averageKills
 */
InlineResponse20014TeamRosterStats.prototype.averageKills = undefined;

/**
 * @member {String} summonerName
 */
InlineResponse20014TeamRosterStats.prototype.summonerName = undefined;

/**
 * @member {Array.<Number>} championIds
 */
InlineResponse20014TeamRosterStats.prototype.championIds = undefined;

