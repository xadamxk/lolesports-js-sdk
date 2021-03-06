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
import {HighlanderPlayer} from './HighlanderPlayer';
import {HighlanderPlayerChampions} from './HighlanderPlayerChampions';

/**
 * The AllOfinlineResponse20015PlayersItems model module.
 * @module model/AllOfinlineResponse20015PlayersItems
 * @version 1.0.0-alpha-1
 */
export class AllOfinlineResponse20015PlayersItems extends HighlanderPlayer {
  /**
   * Constructs a new <code>AllOfinlineResponse20015PlayersItems</code>.
   * @alias module:model/AllOfinlineResponse20015PlayersItems
   * @class
   * @extends module:model/HighlanderPlayer
   * @param id {} The player ID
   * @param slug {} URL friendly version of the player's in game name
   * @param name {} The player's in game name
   * @param firstName {} 
   * @param roleSlug {} The role they usually play
   * @param photoUrl {} URL to the player's photo
   * @param hometown {} 
   * @param region {} 
   * @param birthdate {} 
   * @param createdAt {} The date and time when this entry was created.
   * @param updatedAt {} The date and time when this entry was last updated.
   * @param bios {} Contains a description of the player translated to various languages.  The keys are presented in the format ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))  `{languageCode}_{countryCode}`  The value is a string containing html tags representing the description in that specific locale. 
   * @param foreignIds {} 
   * @param socialNetworks {} Contains links to the player's social media accounts.  The key is the name of the social media platform and the value is the URL 
   * @param champions {} 
   * @param starterOnTeams {} The IDs of the team(s) this player is/has been on the starting lineup 
   * @param subOnTeams {} The IDs of the team(s) this player is/has been on as a sub player 
   * @param teams {} A combination of the teamIDs in `starterOnTeams` and `subOnTeams` 
   * @param photoInformation {} 
   * @param scheduleItems {} Contains the ids to schedule items representing the player's/team's next matches.  This is regardless of the tournament ID passed in the url. 
   */
  constructor(id, slug, name, firstName, roleSlug, photoUrl, hometown, region, birthdate, createdAt, updatedAt, bios, foreignIds, socialNetworks, champions, starterOnTeams, subOnTeams, teams, photoInformation, scheduleItems) {
    super(id, slug, name, firstName, roleSlug, photoUrl, hometown, region, birthdate, createdAt, updatedAt, bios, foreignIds, socialNetworks, champions);
    this.starterOnTeams = starterOnTeams;
    this.subOnTeams = subOnTeams;
    this.teams = teams;
    this.photoInformation = photoInformation;
    this.scheduleItems = scheduleItems;
  }

  /**
   * Constructs a <code>AllOfinlineResponse20015PlayersItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfinlineResponse20015PlayersItems} obj Optional instance to populate.
   * @return {module:model/AllOfinlineResponse20015PlayersItems} The populated <code>AllOfinlineResponse20015PlayersItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfinlineResponse20015PlayersItems();
      HighlanderPlayer.constructFromObject(data, obj);
      if (data.hasOwnProperty('starterOnTeams'))
        obj.starterOnTeams = ApiClient.convertToType(data['starterOnTeams'], ['Number']);
      if (data.hasOwnProperty('subOnTeams'))
        obj.subOnTeams = ApiClient.convertToType(data['subOnTeams'], ['Number']);
      if (data.hasOwnProperty('teams'))
        obj.teams = ApiClient.convertToType(data['teams'], ['Number']);
      if (data.hasOwnProperty('photoInformation'))
        obj.photoInformation = ApiClient.convertToType(data['photoInformation'], Object);
      if (data.hasOwnProperty('scheduleItems'))
        obj.scheduleItems = ApiClient.convertToType(data['scheduleItems'], ['String']);
      if (data.hasOwnProperty('playerStatsSummary'))
        obj.playerStatsSummary = ApiClient.convertToType(data['playerStatsSummary'], 'String');
      if (data.hasOwnProperty('playerStatsHistory'))
        obj.playerStatsHistory = ApiClient.convertToType(data['playerStatsHistory'], ['String']);
    }
    return obj;
  }
}

/**
 * The IDs of the team(s) this player is/has been on the starting lineup 
 * @member {Array.<Number>} starterOnTeams
 */
AllOfinlineResponse20015PlayersItems.prototype.starterOnTeams = undefined;

/**
 * The IDs of the team(s) this player is/has been on as a sub player 
 * @member {Array.<Number>} subOnTeams
 */
AllOfinlineResponse20015PlayersItems.prototype.subOnTeams = undefined;

/**
 * A combination of the teamIDs in `starterOnTeams` and `subOnTeams` 
 * @member {Array.<Number>} teams
 */
AllOfinlineResponse20015PlayersItems.prototype.teams = undefined;

/**
 * @member {Object} photoInformation
 */
AllOfinlineResponse20015PlayersItems.prototype.photoInformation = undefined;

/**
 * Contains the ids to schedule items representing the player's/team's next matches.  This is regardless of the tournament ID passed in the url. 
 * @member {Array.<String>} scheduleItems
 */
AllOfinlineResponse20015PlayersItems.prototype.scheduleItems = undefined;

/**
 * @member {String} playerStatsSummary
 */
AllOfinlineResponse20015PlayersItems.prototype.playerStatsSummary = undefined;

/**
 * Contains the `playerStatsHistory` IDs, which are just the game ID of the match and the player ID separated by a colon.  Contains the last 4 played matches in the specified tournament. The first ID is of the most recently played match. 
 * @member {Array.<String>} playerStatsHistory
 */
AllOfinlineResponse20015PlayersItems.prototype.playerStatsHistory = undefined;

