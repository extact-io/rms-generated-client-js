"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenericErrorInfo = _interopRequireDefault(require("../dto/GenericErrorInfo"));

var _UserAccountResourceDto = _interopRequireDefault(require("../dto/UserAccountResourceDto"));

var _ValidationErrorInfo = _interopRequireDefault(require("../dto/ValidationErrorInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Common service.
* @module api/CommonApi
* @version 1.0.0
*/
var CommonApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CommonApi. 
  * @alias module:api/CommonApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CommonApi(apiClient) {
    _classCallCheck(this, CommonApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * 自分のプロファイル情報を取得する
   * ログインしているユーザ自身のプロファイル情報を返す
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/UserAccountResourceDto} and HTTP response
   */


  _createClass(CommonApi, [{
    key: "getOwnUserProfileWithHttpInfo",
    value: function getOwnUserProfileWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserAccountResourceDto["default"];
      return this.apiClient.callApi('/rms/users/own', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 自分のプロファイル情報を取得する
     * ログインしているユーザ自身のプロファイル情報を返す
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */

  }, {
    key: "getOwnUserProfile",
    value: function getOwnUserProfile() {
      return this.getOwnUserProfileWithHttpInfo().then(function (response_and_data) {
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

  }, {
    key: "updateUserProfileWithHttpInfo",
    value: function updateUserProfileWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['userAccountResourceDto'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UserAccountResourceDto["default"];
      return this.apiClient.callApi('/rms/users/own', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 自分のプロファイル情報を更新する
     * 自分以外の情報を更新しようとした場合は禁止操作として403を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/UserAccountResourceDto} opts.userAccountResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */

  }, {
    key: "updateUserProfile",
    value: function updateUserProfile(opts) {
      return this.updateUserProfileWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CommonApi;
}();

exports["default"] = CommonApi;