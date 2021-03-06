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
import {ApiClient} from "../ApiClient";
import {InlineResponse2009} from '../model/InlineResponse2009';
import {Window} from '../model/Window';

/**
* MatchDetails service.
* @module api/MatchDetailsApi
* @version 1.0.0-alpha-1
*/
export class MatchDetailsApi {

    /**
    * Constructs a new MatchDetailsApi. 
    * @alias module:api/MatchDetailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getDetails operation.
     * @callback moduleapi/MatchDetailsApi~getDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} gameId The game id of the match 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startingTime The date-time (RFC3339) 
     * @param {String} opts.participantIds A list of the participant Ids separated by underscores and not commas 
     * @param {module:api/MatchDetailsApi~getDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDetails(gameId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling getDetails");
      }

      let pathParams = {
        'gameId': gameId
      };
      let queryParams = {
        'startingTime': opts['startingTime'],'participantIds': opts['participantIds']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/details/{gameId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWindow operation.
     * @callback moduleapi/MatchDetailsApi~getWindowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Window{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} gameId The game id of the match 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startingTime The date-time (RFC3339) 
     * @param {module:api/MatchDetailsApi~getWindowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getWindow(gameId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling getWindow");
      }

      let pathParams = {
        'gameId': gameId
      };
      let queryParams = {
        'startingTime': opts['startingTime']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Window;

      return this.apiClient.callApi(
        '/window/{gameId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}