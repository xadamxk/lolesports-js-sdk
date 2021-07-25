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
import {BracketType} from './BracketType';
import {Brackets} from './Brackets';
import {Breakpoints} from './Breakpoints';
import {HighlanderTournamentRosters} from './HighlanderTournamentRosters';
import {MatchType} from './MatchType';
import {Roles} from './Roles';
import {RosteringStrategy} from './RosteringStrategy';
import {Standings} from './Standings';

/**
 * The HighlanderTournament model module.
 * @module model/HighlanderTournament
 * @version 1.0.0-alpha-1
 */
export class HighlanderTournament {
  /**
   * Constructs a new <code>HighlanderTournament</code>.
   * @alias module:model/HighlanderTournament
   * @class
   * @param id {String} The tournament Id  It is a [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) 
   * @param title {String} URL friendly version of the tournament name
   * @param description {String} The tournament's name
   * @param leagueReference {String} The integer in the string represents the league ID.
   * @param roles {module:model/Roles} 
   * @param queues {Object} 
   * @param rosters {Object.<String, module:model/HighlanderTournamentRosters>} The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the roster ID.  Their values are objects but they don't contain anything useful about the roster. 
   * @param published {Boolean} If the value is true then the league/tournament has concluded, otherwise it is ongoing. 
   * @param brackets {module:model/Brackets} 
   * @param liveMatches {Array.<String>} The array contains [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) Match IDs  Despite the name of this property it is unreliable as for some tournaments this array will contain match IDs yet the matches are over. 
   * @param startDate {Date} The day the tournament starts/started.
   * @param endDate {Date} The day the tournament ends/ended.
   * @param platformIds {Array.<String>} Contains all the platform IDs in for this tournaments.  A platform ID is combination of the gameRealm and the gameId. The regex below describes the format.  `^[A-Z]+\\d+:\\d+$` 
   * @param gameIds {Array.<String>} 'Contains all the gameIds in this tournament.  **Note:** The gameIds are in the format [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier)' 
   * @param leagueId {String} The league ID
   * @param league {String} The league ID
   */
  constructor(id, title, description, leagueReference, roles, queues, rosters, published, brackets, liveMatches, startDate, endDate, platformIds, gameIds, leagueId, league) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.leagueReference = leagueReference;
    this.roles = roles;
    this.queues = queues;
    this.rosters = rosters;
    this.published = published;
    this.brackets = brackets;
    this.liveMatches = liveMatches;
    this.startDate = startDate;
    this.endDate = endDate;
    this.platformIds = platformIds;
    this.gameIds = gameIds;
    this.leagueId = leagueId;
    this.league = league;
  }

  /**
   * Constructs a <code>HighlanderTournament</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HighlanderTournament} obj Optional instance to populate.
   * @return {module:model/HighlanderTournament} The populated <code>HighlanderTournament</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HighlanderTournament();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('leagueReference'))
        obj.leagueReference = ApiClient.convertToType(data['leagueReference'], 'String');
      if (data.hasOwnProperty('roles'))
        obj.roles = Roles.constructFromObject(data['roles']);
      if (data.hasOwnProperty('bracketType'))
        obj.bracketType = BracketType.constructFromObject(data['bracketType']);
      if (data.hasOwnProperty('matchType'))
        obj.matchType = MatchType.constructFromObject(data['matchType']);
      if (data.hasOwnProperty('rosteringStrategy'))
        obj.rosteringStrategy = RosteringStrategy.constructFromObject(data['rosteringStrategy']);
      if (data.hasOwnProperty('seedingStrategy'))
        obj.seedingStrategy = RosteringStrategy.constructFromObject(data['seedingStrategy']);
      if (data.hasOwnProperty('queues'))
        obj.queues = ApiClient.convertToType(data['queues'], Object);
      if (data.hasOwnProperty('rosters'))
        obj.rosters = ApiClient.convertToType(data['rosters'], {'String': HighlanderTournamentRosters});
      if (data.hasOwnProperty('published'))
        obj.published = ApiClient.convertToType(data['published'], 'Boolean');
      if (data.hasOwnProperty('breakpoints'))
        obj.breakpoints = Breakpoints.constructFromObject(data['breakpoints']);
      if (data.hasOwnProperty('brackets'))
        obj.brackets = Brackets.constructFromObject(data['brackets']);
      if (data.hasOwnProperty('standings'))
        obj.standings = Standings.constructFromObject(data['standings']);
      if (data.hasOwnProperty('liveMatches'))
        obj.liveMatches = ApiClient.convertToType(data['liveMatches'], ['String']);
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'Date');
      if (data.hasOwnProperty('endDate'))
        obj.endDate = ApiClient.convertToType(data['endDate'], 'Date');
      if (data.hasOwnProperty('platformIds'))
        obj.platformIds = ApiClient.convertToType(data['platformIds'], ['String']);
      if (data.hasOwnProperty('gameIds'))
        obj.gameIds = ApiClient.convertToType(data['gameIds'], ['String']);
      if (data.hasOwnProperty('leagueId'))
        obj.leagueId = ApiClient.convertToType(data['leagueId'], 'String');
      if (data.hasOwnProperty('league'))
        obj.league = ApiClient.convertToType(data['league'], 'String');
    }
    return obj;
  }
}

/**
 * The tournament Id  It is a [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) 
 * @member {String} id
 */
HighlanderTournament.prototype.id = undefined;

/**
 * URL friendly version of the tournament name
 * @member {String} title
 */
HighlanderTournament.prototype.title = undefined;

/**
 * The tournament's name
 * @member {String} description
 */
HighlanderTournament.prototype.description = undefined;

/**
 * The integer in the string represents the league ID.
 * @member {String} leagueReference
 */
HighlanderTournament.prototype.leagueReference = undefined;

/**
 * @member {module:model/Roles} roles
 */
HighlanderTournament.prototype.roles = undefined;

/**
 * @member {module:model/BracketType} bracketType
 */
HighlanderTournament.prototype.bracketType = undefined;

/**
 * @member {module:model/MatchType} matchType
 */
HighlanderTournament.prototype.matchType = undefined;

/**
 * @member {module:model/RosteringStrategy} rosteringStrategy
 */
HighlanderTournament.prototype.rosteringStrategy = undefined;

/**
 * @member {module:model/RosteringStrategy} seedingStrategy
 */
HighlanderTournament.prototype.seedingStrategy = undefined;

/**
 * @member {Object} queues
 */
HighlanderTournament.prototype.queues = undefined;

/**
 * The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the roster ID.  Their values are objects but they don't contain anything useful about the roster. 
 * @member {Object.<String, module:model/HighlanderTournamentRosters>} rosters
 */
HighlanderTournament.prototype.rosters = undefined;

/**
 * If the value is true then the league/tournament has concluded, otherwise it is ongoing. 
 * @member {Boolean} published
 */
HighlanderTournament.prototype.published = undefined;

/**
 * @member {module:model/Breakpoints} breakpoints
 */
HighlanderTournament.prototype.breakpoints = undefined;

/**
 * @member {module:model/Brackets} brackets
 */
HighlanderTournament.prototype.brackets = undefined;

/**
 * @member {module:model/Standings} standings
 */
HighlanderTournament.prototype.standings = undefined;

/**
 * The array contains [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) Match IDs  Despite the name of this property it is unreliable as for some tournaments this array will contain match IDs yet the matches are over. 
 * @member {Array.<String>} liveMatches
 */
HighlanderTournament.prototype.liveMatches = undefined;

/**
 * The day the tournament starts/started.
 * @member {Date} startDate
 */
HighlanderTournament.prototype.startDate = undefined;

/**
 * The day the tournament ends/ended.
 * @member {Date} endDate
 */
HighlanderTournament.prototype.endDate = undefined;

/**
 * Contains all the platform IDs in for this tournaments.  A platform ID is combination of the gameRealm and the gameId. The regex below describes the format.  `^[A-Z]+\\d+:\\d+$` 
 * @member {Array.<String>} platformIds
 */
HighlanderTournament.prototype.platformIds = undefined;

/**
 * 'Contains all the gameIds in this tournament.  **Note:** The gameIds are in the format [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier)' 
 * @member {Array.<String>} gameIds
 */
HighlanderTournament.prototype.gameIds = undefined;

/**
 * The league ID
 * @member {String} leagueId
 */
HighlanderTournament.prototype.leagueId = undefined;

/**
 * The league ID
 * @member {String} league
 */
HighlanderTournament.prototype.league = undefined;

