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
 * The TeamMetadata model module.
 * @module model/TeamMetadata
 * @version 1.0.0-alpha-1
 */
export class TeamMetadata {
  /**
   * Constructs a new <code>TeamMetadata</code>.
   * @alias module:model/TeamMetadata
   * @class
   * @param esportsTeamId {String} The team Id
   * @param participantMetadata {Array.<Object>} 
   */
  constructor(esportsTeamId, participantMetadata) {
    this.esportsTeamId = esportsTeamId;
    this.participantMetadata = participantMetadata;
  }

  /**
   * Constructs a <code>TeamMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamMetadata} obj Optional instance to populate.
   * @return {module:model/TeamMetadata} The populated <code>TeamMetadata</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamMetadata();
      if (data.hasOwnProperty('esportsTeamId'))
        obj.esportsTeamId = ApiClient.convertToType(data['esportsTeamId'], 'String');
      if (data.hasOwnProperty('participantMetadata'))
        obj.participantMetadata = ApiClient.convertToType(data['participantMetadata'], [OneOfteamMetadataParticipantMetadataItems]);
    }
    return obj;
  }
}

/**
 * The team Id
 * @member {String} esportsTeamId
 */
TeamMetadata.prototype.esportsTeamId = undefined;

/**
 * @member {Array.<Object>} participantMetadata
 */
TeamMetadata.prototype.participantMetadata = undefined;

