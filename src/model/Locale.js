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
 * Enum class Locale.
 * @enum {String}
 * @readonly
 */
const Locale = {
  /**
   * value: "en-US"
   * @const
   */
  enUS: "en-US",

  /**
   * value: "en-GB"
   * @const
   */
  enGB: "en-GB",

  /**
   * value: "en-AU"
   * @const
   */
  enAU: "en-AU",

  /**
   * value: "cs-CZ"
   * @const
   */
  csCZ: "cs-CZ",

  /**
   * value: "de-DE"
   * @const
   */
  deDE: "de-DE",

  /**
   * value: "el-GR"
   * @const
   */
  elGR: "el-GR",

  /**
   * value: "es-ES"
   * @const
   */
  esES: "es-ES",

  /**
   * value: "es-MX"
   * @const
   */
  esMX: "es-MX",

  /**
   * value: "fr-FR"
   * @const
   */
  frFR: "fr-FR",

  /**
   * value: "hu-HU"
   * @const
   */
  huHU: "hu-HU",

  /**
   * value: "it-IT"
   * @const
   */
  itIT: "it-IT",

  /**
   * value: "pl-PL"
   * @const
   */
  plPL: "pl-PL",

  /**
   * value: "pt-BR"
   * @const
   */
  ptBR: "pt-BR",

  /**
   * value: "ro-RO"
   * @const
   */
  roRO: "ro-RO",

  /**
   * value: "ru-RU"
   * @const
   */
  ruRU: "ru-RU",

  /**
   * value: "tr-TR"
   * @const
   */
  trTR: "tr-TR",

  /**
   * value: "ja-JP"
   * @const
   */
  jaJP: "ja-JP",

  /**
   * value: "ko-KR"
   * @const
   */
  koKR: "ko-KR",

  /**
   * Returns a <code>Locale</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/Locale} The enum <code>Locale</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {Locale};