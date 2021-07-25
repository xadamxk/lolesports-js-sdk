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
 * The Player model module.
 * @module model/Player
 * @version 1.0.0-alpha-1
 */
export class Player {
  /**
   * Constructs a new <code>Player</code>.
   * @alias module:model/Player
   * @class
   * @param id {String} 
   * @param summonerName {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param image {String} 
   * @param role {String} 
   */
  constructor(id, summonerName, firstName, lastName, image, role) {
    this.id = id;
    this.summonerName = summonerName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.image = image;
    this.role = role;
  }

  /**
   * Constructs a <code>Player</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Player} obj Optional instance to populate.
   * @return {module:model/Player} The populated <code>Player</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Player();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('summonerName'))
        obj.summonerName = ApiClient.convertToType(data['summonerName'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Player.prototype.id = undefined;

/**
 * @member {String} summonerName
 */
Player.prototype.summonerName = undefined;

/**
 * @member {String} firstName
 */
Player.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
Player.prototype.lastName = undefined;

/**
 * @member {String} image
 */
Player.prototype.image = undefined;

/**
 * @member {String} role
 */
Player.prototype.role = undefined;
