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
import {GameId} from './GameId';

/**
 * The Video model module.
 * @module model/Video
 * @version 1.0.0-alpha-1
 */
export class Video {
  /**
   * Constructs a new <code>Video</code>.
   * @alias module:model/Video
   * @class
   * @param id {Number} 
   * @param slug {String} 
   * @param label {String} 
   * @param locale {String} The video's locale. The value is a [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code. 
   * @param reference {String} Contains the tournament Id and the game Id of that match. 
   * @param source {String} URL to the YouTube video of the match 
   * @param createdAt {Date} The date and time when this entry was created.
   * @param updatedAt {Date} The date and time when this entry was last updated.
   * @param game {module:model/GameId} 
   */
  constructor(id, slug, label, locale, reference, source, createdAt, updatedAt, game) {
    this.id = id;
    this.slug = slug;
    this.label = label;
    this.locale = locale;
    this.reference = reference;
    this.source = source;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.game = game;
  }

  /**
   * Constructs a <code>Video</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Video} obj Optional instance to populate.
   * @return {module:model/Video} The populated <code>Video</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Video();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('slug'))
        obj.slug = ApiClient.convertToType(data['slug'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('game'))
        obj.game = GameId.constructFromObject(data['game']);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Video.prototype.id = undefined;

/**
 * @member {String} slug
 */
Video.prototype.slug = undefined;

/**
 * @member {String} label
 */
Video.prototype.label = undefined;

/**
 * The video's locale. The value is a [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code. 
 * @member {String} locale
 */
Video.prototype.locale = undefined;

/**
 * Contains the tournament Id and the game Id of that match. 
 * @member {String} reference
 */
Video.prototype.reference = undefined;

/**
 * URL to the YouTube video of the match 
 * @member {String} source
 */
Video.prototype.source = undefined;

/**
 * The date and time when this entry was created.
 * @member {Date} createdAt
 */
Video.prototype.createdAt = undefined;

/**
 * The date and time when this entry was last updated.
 * @member {Date} updatedAt
 */
Video.prototype.updatedAt = undefined;

/**
 * @member {module:model/GameId} game
 */
Video.prototype.game = undefined;
