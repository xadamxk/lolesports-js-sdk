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
import {BaseLeague} from './BaseLeague';

/**
 * The SimpleLeague model module.
 * @module model/SimpleLeague
 * @version 1.0.0-alpha-1
 */
export class SimpleLeague extends BaseLeague {
  /**
   * Constructs a new <code>SimpleLeague</code>.
   * @alias module:model/SimpleLeague
   * @class
   * @extends module:model/BaseLeague
   * @param name {} The name of the league
   * @param slug {} URL friendly version of the league's name
   * @param id {} The league's ID
   * @param image {} URL to an image of the League's logo
   */
  constructor(name, slug, id, image) {
    super(name, slug);
    this.id = id;
    this.image = image;
  }

  /**
   * Constructs a <code>SimpleLeague</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimpleLeague} obj Optional instance to populate.
   * @return {module:model/SimpleLeague} The populated <code>SimpleLeague</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SimpleLeague();
      BaseLeague.constructFromObject(data, obj);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
    }
    return obj;
  }
}

/**
 * The league's ID
 * @member {String} id
 */
SimpleLeague.prototype.id = undefined;

/**
 * URL to an image of the League's logo
 * @member {String} image
 */
SimpleLeague.prototype.image = undefined;

