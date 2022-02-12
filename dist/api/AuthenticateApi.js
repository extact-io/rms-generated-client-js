"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenericErrorInfo = _interopRequireDefault(require("../dto/GenericErrorInfo"));

var _LoginDto = _interopRequireDefault(require("../dto/LoginDto"));

var _UserAccountResourceDto = _interopRequireDefault(require("../dto/UserAccountResourceDto"));

var _ValidationErrorInfo = _interopRequireDefault(require("../dto/ValidationErrorInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Authenticate service.
* @module api/AuthenticateApi
* @version 1.0.0-SNAPSHOT
*/
var AuthenticateApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthenticateApi. 
  * @alias module:api/AuthenticateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthenticateApi(apiClient) {
    _classCallCheck(this, AuthenticateApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * ユーザ認証を行う
   * ログイン名とパスワードに一致するユーザを取得する
   * @param {Object} opts Optional parameters
   * @param {module:dto/LoginDto} opts.loginDto 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/UserAccountResourceDto} and HTTP response
   */


  _createClass(AuthenticateApi, [{
    key: "authenticateWithHttpInfo",
    value: function authenticateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['loginDto'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UserAccountResourceDto["default"];
      return this.apiClient.callApi('/rms/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ユーザ認証を行う
     * ログイン名とパスワードに一致するユーザを取得する
     * @param {Object} opts Optional parameters
     * @param {module:dto/LoginDto} opts.loginDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */

  }, {
    key: "authenticate",
    value: function authenticate(opts) {
      return this.authenticateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * ユーザ認証を行う（curlのテスト用）
     * ログイン名とパスワードに一致するユーザを取得する
     * @param {String} loginId ログインId
     * @param {String} password パスワード
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/UserAccountResourceDto} and HTTP response
     */

  }, {
    key: "authenticateForTestWithHttpInfo",
    value: function authenticateForTestWithHttpInfo(loginId, password) {
      var postBody = null; // verify the required parameter 'loginId' is set

      if (loginId === undefined || loginId === null) {
        throw new Error("Missing the required parameter 'loginId' when calling authenticateForTest");
      } // verify the required parameter 'password' is set


      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling authenticateForTest");
      }

      var pathParams = {};
      var queryParams = {
        'loginId': loginId,
        'password': password
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserAccountResourceDto["default"];
      return this.apiClient.callApi('/rms/login', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ユーザ認証を行う（curlのテスト用）
     * ログイン名とパスワードに一致するユーザを取得する
     * @param {String} loginId ログインId
     * @param {String} password パスワード
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */

  }, {
    key: "authenticateForTest",
    value: function authenticateForTest(loginId, password) {
      return this.authenticateForTestWithHttpInfo(loginId, password).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AuthenticateApi;
}();

exports["default"] = AuthenticateApi;