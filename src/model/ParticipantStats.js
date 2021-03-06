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
import {BaseParticipantStats} from './BaseParticipantStats';
import {ParticipantId} from './ParticipantId';

/**
 * The ParticipantStats model module.
 * @module model/ParticipantStats
 * @version 1.0.0-alpha-1
 */
export class ParticipantStats extends BaseParticipantStats {
  /**
   * Constructs a new <code>ParticipantStats</code>.
   * @alias module:model/ParticipantStats
   * @class
   * @extends module:model/BaseParticipantStats
   * @param participantId {} 
   * @param level {} 
   * @param kills {} 
   * @param deaths {} 
   * @param assists {} 
   * @param creepScore {} 
   * @param totalGold {} 
   * @param currentHealth {} 
   * @param maxHealth {} 
   */
  constructor(participantId, level, kills, deaths, assists, creepScore, totalGold, currentHealth, maxHealth) {
    super(participantId, level, kills, deaths, assists, creepScore);
    this.totalGold = totalGold;
    this.currentHealth = currentHealth;
    this.maxHealth = maxHealth;
  }

  /**
   * Constructs a <code>ParticipantStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParticipantStats} obj Optional instance to populate.
   * @return {module:model/ParticipantStats} The populated <code>ParticipantStats</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ParticipantStats();
      BaseParticipantStats.constructFromObject(data, obj);
      if (data.hasOwnProperty('totalGold'))
        obj.totalGold = ApiClient.convertToType(data['totalGold'], 'Number');
      if (data.hasOwnProperty('currentHealth'))
        obj.currentHealth = ApiClient.convertToType(data['currentHealth'], 'Number');
      if (data.hasOwnProperty('maxHealth'))
        obj.maxHealth = ApiClient.convertToType(data['maxHealth'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} totalGold
 */
ParticipantStats.prototype.totalGold = undefined;

/**
 * @member {Number} currentHealth
 */
ParticipantStats.prototype.currentHealth = undefined;

/**
 * @member {Number} maxHealth
 */
ParticipantStats.prototype.maxHealth = undefined;

