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
import {SimpleMatch} from './SimpleMatch';
import {State} from './State';

/**
 * The AllOfsectionMatchesItems model module.
 * @module model/AllOfsectionMatchesItems
 * @version 1.0.0-alpha-1
 */
export class AllOfsectionMatchesItems extends SimpleMatch {
  /**
   * Constructs a new <code>AllOfsectionMatchesItems</code>.
   * @alias module:model/AllOfsectionMatchesItems
   * @class
   * @extends module:model/SimpleMatch
   * @param id {} The match id
   * @param state {} 
   * @param previousMatchIds {} This stores the previous match ids for the teams in the current match were involved in.  For group stages this is usually null. For bracket stage it is used to indicate the matches that were played before the match in question. 
   * @param flags {} The purpose of this key is unknown. So far the only value it has seems to be null. 
   * @param teams {} 
   */
  constructor(id, state, previousMatchIds, flags, teams) {
    super(teams, id);
    this.state = state;
    this.previousMatchIds = previousMatchIds;
    this.flags = flags;
    this.teams = teams;
  }

  /**
   * Constructs a <code>AllOfsectionMatchesItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfsectionMatchesItems} obj Optional instance to populate.
   * @return {module:model/AllOfsectionMatchesItems} The populated <code>AllOfsectionMatchesItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfsectionMatchesItems();
      SimpleMatch.constructFromObject(data, obj);
      if (data.hasOwnProperty('state'))
        obj.state = State.constructFromObject(data['state']);
      if (data.hasOwnProperty('previousMatchIds'))
        obj.previousMatchIds = ApiClient.convertToType(data['previousMatchIds'], ['String']);
      if (data.hasOwnProperty('flags'))
        obj.flags = ApiClient.convertToType(data['flags'], 'String');
      if (data.hasOwnProperty('teams'))
        obj.teams = ApiClient.convertToType(data['teams'], [Object]);
    }
    return obj;
  }
}

/**
 * @member {module:model/State} state
 */
AllOfsectionMatchesItems.prototype.state = undefined;

/**
 * This stores the previous match ids for the teams in the current match were involved in.  For group stages this is usually null. For bracket stage it is used to indicate the matches that were played before the match in question. 
 * @member {Array.<String>} previousMatchIds
 */
AllOfsectionMatchesItems.prototype.previousMatchIds = undefined;

/**
 * The purpose of this key is unknown. So far the only value it has seems to be null. 
 * @member {String} flags
 */
AllOfsectionMatchesItems.prototype.flags = undefined;

/**
 * @member {Array.<Object>} teams
 */
AllOfsectionMatchesItems.prototype.teams = undefined;

