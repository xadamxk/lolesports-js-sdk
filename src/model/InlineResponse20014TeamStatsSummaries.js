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
import {InlineResponse20014AverageDamageByPosition} from './InlineResponse20014AverageDamageByPosition';

/**
 * The InlineResponse20014TeamStatsSummaries model module.
 * @module model/InlineResponse20014TeamStatsSummaries
 * @version 1.0.0-alpha-1
 */
export class InlineResponse20014TeamStatsSummaries {
  /**
   * Constructs a new <code>InlineResponse20014TeamStatsSummaries</code>.
   * @alias module:model/InlineResponse20014TeamStatsSummaries
   * @class
   * @param teamId {String} Contains the team ID
   * @param kdaRatio {Number} The team's KDA Ratio
   * @param kdaRatioRank {Number} The position the team ranks at compared to other teams' KDA ratio 
   * @param averageWinLength {Number} The average length of the team's wins in seconds. 
   * @param averageWinLengthRank {Number} The position the team ranks at compared to other team's average win lengths. 
   * @param firstDragonKillRatio {Number} The ratio of first dragons killed by this team compared to the total first dragons killed in this team's matches. 
   * @param firstDragonKillRatioRank {Number} The position the teams ranks at compared to other team's first dragon kill ratio 
   * @param firstTowerRatio {Number} The ratio of first tower secured by this team compared to the total first towers secured in this team's matches. 
   * @param firstTowerRatioRank {Number} The position the teams ranks at compared to other team's first tower ratio. 
   * @param averageDamageByPosition {module:model/InlineResponse20014AverageDamageByPosition} 
   */
  constructor(teamId, kdaRatio, kdaRatioRank, averageWinLength, averageWinLengthRank, firstDragonKillRatio, firstDragonKillRatioRank, firstTowerRatio, firstTowerRatioRank, averageDamageByPosition) {
    this.teamId = teamId;
    this.kdaRatio = kdaRatio;
    this.kdaRatioRank = kdaRatioRank;
    this.averageWinLength = averageWinLength;
    this.averageWinLengthRank = averageWinLengthRank;
    this.firstDragonKillRatio = firstDragonKillRatio;
    this.firstDragonKillRatioRank = firstDragonKillRatioRank;
    this.firstTowerRatio = firstTowerRatio;
    this.firstTowerRatioRank = firstTowerRatioRank;
    this.averageDamageByPosition = averageDamageByPosition;
  }

  /**
   * Constructs a <code>InlineResponse20014TeamStatsSummaries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014TeamStatsSummaries} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014TeamStatsSummaries} The populated <code>InlineResponse20014TeamStatsSummaries</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20014TeamStatsSummaries();
      if (data.hasOwnProperty('teamId'))
        obj.teamId = ApiClient.convertToType(data['teamId'], 'String');
      if (data.hasOwnProperty('kdaRatio'))
        obj.kdaRatio = ApiClient.convertToType(data['kdaRatio'], 'Number');
      if (data.hasOwnProperty('kdaRatioRank'))
        obj.kdaRatioRank = ApiClient.convertToType(data['kdaRatioRank'], 'Number');
      if (data.hasOwnProperty('averageWinLength'))
        obj.averageWinLength = ApiClient.convertToType(data['averageWinLength'], 'Number');
      if (data.hasOwnProperty('averageWinLengthRank'))
        obj.averageWinLengthRank = ApiClient.convertToType(data['averageWinLengthRank'], 'Number');
      if (data.hasOwnProperty('firstDragonKillRatio'))
        obj.firstDragonKillRatio = ApiClient.convertToType(data['firstDragonKillRatio'], 'Number');
      if (data.hasOwnProperty('firstDragonKillRatioRank'))
        obj.firstDragonKillRatioRank = ApiClient.convertToType(data['firstDragonKillRatioRank'], 'Number');
      if (data.hasOwnProperty('firstTowerRatio'))
        obj.firstTowerRatio = ApiClient.convertToType(data['firstTowerRatio'], 'Number');
      if (data.hasOwnProperty('firstTowerRatioRank'))
        obj.firstTowerRatioRank = ApiClient.convertToType(data['firstTowerRatioRank'], 'Number');
      if (data.hasOwnProperty('averageDamageByPosition'))
        obj.averageDamageByPosition = InlineResponse20014AverageDamageByPosition.constructFromObject(data['averageDamageByPosition']);
    }
    return obj;
  }
}

/**
 * Contains the team ID
 * @member {String} teamId
 */
InlineResponse20014TeamStatsSummaries.prototype.teamId = undefined;

/**
 * The team's KDA Ratio
 * @member {Number} kdaRatio
 */
InlineResponse20014TeamStatsSummaries.prototype.kdaRatio = undefined;

/**
 * The position the team ranks at compared to other teams' KDA ratio 
 * @member {Number} kdaRatioRank
 */
InlineResponse20014TeamStatsSummaries.prototype.kdaRatioRank = undefined;

/**
 * The average length of the team's wins in seconds. 
 * @member {Number} averageWinLength
 */
InlineResponse20014TeamStatsSummaries.prototype.averageWinLength = undefined;

/**
 * The position the team ranks at compared to other team's average win lengths. 
 * @member {Number} averageWinLengthRank
 */
InlineResponse20014TeamStatsSummaries.prototype.averageWinLengthRank = undefined;

/**
 * The ratio of first dragons killed by this team compared to the total first dragons killed in this team's matches. 
 * @member {Number} firstDragonKillRatio
 */
InlineResponse20014TeamStatsSummaries.prototype.firstDragonKillRatio = undefined;

/**
 * The position the teams ranks at compared to other team's first dragon kill ratio 
 * @member {Number} firstDragonKillRatioRank
 */
InlineResponse20014TeamStatsSummaries.prototype.firstDragonKillRatioRank = undefined;

/**
 * The ratio of first tower secured by this team compared to the total first towers secured in this team's matches. 
 * @member {Number} firstTowerRatio
 */
InlineResponse20014TeamStatsSummaries.prototype.firstTowerRatio = undefined;

/**
 * The position the teams ranks at compared to other team's first tower ratio. 
 * @member {Number} firstTowerRatioRank
 */
InlineResponse20014TeamStatsSummaries.prototype.firstTowerRatioRank = undefined;

/**
 * @member {module:model/InlineResponse20014AverageDamageByPosition} averageDamageByPosition
 */
InlineResponse20014TeamStatsSummaries.prototype.averageDamageByPosition = undefined;
