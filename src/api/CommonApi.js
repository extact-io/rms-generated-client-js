/**
 * レンタル予約システムの公開API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GenericErrorInfo from '../dto/GenericErrorInfo';
import UserAccountResourceDto from '../dto/UserAccountResourceDto';
import ValidationErrorInfo from '../dto/ValidationErrorInfo';

/**
* Common service.
* @module api/CommonApi
* @version 0.0.1-SNAPSHOT
*/
export default class CommonApi {

    /**
    * Constructs a new CommonApi. 
    * @alias module:api/CommonApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 自分のプロファイル情報を取得する
     * ログインしているユーザ自身のプロファイル情報を返す
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/UserAccountResourceDto} and HTTP response
     */
    getOwnUserProfileWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['RmsJwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserAccountResourceDto;
      return this.apiClient.callApi(
        '/rms/users/own', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 自分のプロファイル情報を取得する
     * ログインしているユーザ自身のプロファイル情報を返す
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */
    getOwnUserProfile() {
      return this.getOwnUserProfileWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 自分のプロファイル情報を更新する
     * 自分以外の情報を更新しようとした場合は禁止操作として403を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/UserAccountResourceDto} opts.userAccountResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/UserAccountResourceDto} and HTTP response
     */
    updateUserProfileWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['userAccountResourceDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['RmsJwtAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserAccountResourceDto;
      return this.apiClient.callApi(
        '/rms/users/own', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 自分のプロファイル情報を更新する
     * 自分以外の情報を更新しようとした場合は禁止操作として403を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/UserAccountResourceDto} opts.userAccountResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */
    updateUserProfile(opts) {
      return this.updateUserProfileWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}