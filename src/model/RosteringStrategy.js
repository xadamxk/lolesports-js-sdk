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
 * The RosteringStrategy model module.
 * @module model/RosteringStrategy
 * @version 1.0.0-alpha-1
 */
export class RosteringStrategy {
  /**
   * Constructs a new <code>RosteringStrategy</code>.
   * @alias module:model/RosteringStrategy
   * @class
   * @param identifier {module:model/RosteringStrategy.IdentifierEnum} 
   */
  constructor(identifier) {
    this.identifier = identifier;
  }

  /**
   * Constructs a <code>RosteringStrategy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RosteringStrategy} obj Optional instance to populate.
   * @return {module:model/RosteringStrategy} The populated <code>RosteringStrategy</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RosteringStrategy();
      if (data.hasOwnProperty('identifier'))
        obj.identifier = ApiClient.convertToType(data['identifier'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>identifier</code> property.
 * @enum {String}
 * @readonly
 */
RosteringStrategy.IdentifierEnum = {
  /**
   * value: "passthru"
   * @const
   */
  passthru: "passthru",

  /**
   * value: "random"
   * @const
   */
  random: "random"
};
/**
 * @member {module:model/RosteringStrategy.IdentifierEnum} identifier
 */
RosteringStrategy.prototype.identifier = undefined;
