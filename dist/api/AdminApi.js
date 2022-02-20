"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddRentalItemDto = _interopRequireDefault(require("../dto/AddRentalItemDto"));

var _AddUserAccountDto = _interopRequireDefault(require("../dto/AddUserAccountDto"));

var _GenericErrorInfo = _interopRequireDefault(require("../dto/GenericErrorInfo"));

var _RentalItemResourceDto = _interopRequireDefault(require("../dto/RentalItemResourceDto"));

var _ReservationResourceDto = _interopRequireDefault(require("../dto/ReservationResourceDto"));

var _UserAccountResourceDto = _interopRequireDefault(require("../dto/UserAccountResourceDto"));

var _ValidationErrorInfo = _interopRequireDefault(require("../dto/ValidationErrorInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Admin service.
* @module api/AdminApi
* @version 1.0.0
*/
var AdminApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AdminApi. 
  * @alias module:api/AdminApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AdminApi(apiClient) {
    _classCallCheck(this, AdminApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * レンタル品を登録する
   * シリアル番号が既に使われている場合は409を返す
   * @param {Object} opts Optional parameters
   * @param {module:dto/AddRentalItemDto} opts.addRentalItemDto 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/RentalItemResourceDto} and HTTP response
   */


  _createClass(AdminApi, [{
    key: "addRentalItemWithHttpInfo",
    value: function addRentalItemWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['addRentalItemDto'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RentalItemResourceDto["default"];
      return this.apiClient.callApi('/rms/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * レンタル品を登録する
     * シリアル番号が既に使われている場合は409を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/AddRentalItemDto} opts.addRentalItemDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/RentalItemResourceDto}
     */

  }, {
    key: "addRentalItem",
    value: function addRentalItem(opts) {
      return this.addRentalItemWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * ユーザを登録する
     * ログインIDが既に使われている場合は409を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/AddUserAccountDto} opts.addUserAccountDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/UserAccountResourceDto} and HTTP response
     */

  }, {
    key: "addUserAccountWithHttpInfo",
    value: function addUserAccountWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['addUserAccountDto'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UserAccountResourceDto["default"];
      return this.apiClient.callApi('/rms/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ユーザを登録する
     * ログインIDが既に使われている場合は409を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/AddUserAccountDto} opts.addUserAccountDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */

  }, {
    key: "addUserAccount",
    value: function addUserAccount(opts) {
      return this.addUserAccountWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * レンタル品を削除する
     * 削除対象のレンタル品を参照する予約が存在する場合は削除は行わずエラーにする
     * @param {Number} rentalItemId レンタル品ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteRentalItemWithHttpInfo",
    value: function deleteRentalItemWithHttpInfo(rentalItemId) {
      var postBody = null; // verify the required parameter 'rentalItemId' is set

      if (rentalItemId === undefined || rentalItemId === null) {
        throw new Error("Missing the required parameter 'rentalItemId' when calling deleteRentalItem");
      }

      var pathParams = {
        'rentalItemId': rentalItemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/rms/items/{rentalItemId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * レンタル品を削除する
     * 削除対象のレンタル品を参照する予約が存在する場合は削除は行わずエラーにする
     * @param {Number} rentalItemId レンタル品ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteRentalItem",
    value: function deleteRentalItem(rentalItemId) {
      return this.deleteRentalItemWithHttpInfo(rentalItemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 予約を削除する
     * 予約を削除する
     * @param {Number} reservationId 予約ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteReservationWithHttpInfo",
    value: function deleteReservationWithHttpInfo(reservationId) {
      var postBody = null; // verify the required parameter 'reservationId' is set

      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling deleteReservation");
      }

      var pathParams = {
        'reservationId': reservationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/rms/reservations/{reservationId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 予約を削除する
     * 予約を削除する
     * @param {Number} reservationId 予約ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteReservation",
    value: function deleteReservation(reservationId) {
      return this.deleteReservationWithHttpInfo(reservationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * ユーザを削除する
     * 削除対象のユーザを参照する予約が存在する場合は削除は行わずエラーにする
     * @param {Number} userAccountId ユーザID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteUserAccountWithHttpInfo",
    value: function deleteUserAccountWithHttpInfo(userAccountId) {
      var postBody = null; // verify the required parameter 'userAccountId' is set

      if (userAccountId === undefined || userAccountId === null) {
        throw new Error("Missing the required parameter 'userAccountId' when calling deleteUserAccount");
      }

      var pathParams = {
        'userAccountId': userAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/rms/users/{userAccountId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ユーザを削除する
     * 削除対象のユーザを参照する予約が存在する場合は削除は行わずエラーにする
     * @param {Number} userAccountId ユーザID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteUserAccount",
    value: function deleteUserAccount(userAccountId) {
      return this.deleteUserAccountWithHttpInfo(userAccountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * レンタル品の全件を取得する
     * 登録されているすべてのレンタル品を取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/RentalItemResourceDto>} and HTTP response
     */

  }, {
    key: "getAllRentalItemsWithHttpInfo",
    value: function getAllRentalItemsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RentalItemResourceDto["default"]];
      return this.apiClient.callApi('/rms/items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * レンタル品の全件を取得する
     * 登録されているすべてのレンタル品を取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/RentalItemResourceDto>}
     */

  }, {
    key: "getAllRentalItems",
    value: function getAllRentalItems() {
      return this.getAllRentalItemsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 予約の全件を取得する
     * 登録されているすべての予約を取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */

  }, {
    key: "getAllReservationsWithHttpInfo",
    value: function getAllReservationsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ReservationResourceDto["default"]];
      return this.apiClient.callApi('/rms/reservations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 予約の全件を取得する
     * 登録されているすべての予約を取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */

  }, {
    key: "getAllReservations",
    value: function getAllReservations() {
      return this.getAllReservationsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * ユーザの全件を取得する
     * 登録されているすべてのユーザを取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/UserAccountResourceDto>} and HTTP response
     */

  }, {
    key: "getAllUserAccountsWithHttpInfo",
    value: function getAllUserAccountsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_UserAccountResourceDto["default"]];
      return this.apiClient.callApi('/rms/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ユーザの全件を取得する
     * 登録されているすべてのユーザを取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/UserAccountResourceDto>}
     */

  }, {
    key: "getAllUserAccounts",
    value: function getAllUserAccounts() {
      return this.getAllUserAccountsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * レンタル品を更新する
     * 依頼されたレンタル品を更新する
     * @param {Object} opts Optional parameters
     * @param {module:dto/RentalItemResourceDto} opts.rentalItemResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/RentalItemResourceDto} and HTTP response
     */

  }, {
    key: "updateRentalItemWithHttpInfo",
    value: function updateRentalItemWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['rentalItemResourceDto'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RentalItemResourceDto["default"];
      return this.apiClient.callApi('/rms/items', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * レンタル品を更新する
     * 依頼されたレンタル品を更新する
     * @param {Object} opts Optional parameters
     * @param {module:dto/RentalItemResourceDto} opts.rentalItemResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/RentalItemResourceDto}
     */

  }, {
    key: "updateRentalItem",
    value: function updateRentalItem(opts) {
      return this.updateRentalItemWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 予約を更新する
     * 依頼された予約を更新する。ユーザアカウントとレンタル品のエンティティは更新時に使用していないためIDのみ設定すればよい
     * @param {Object} opts Optional parameters
     * @param {module:dto/ReservationResourceDto} opts.reservationResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/ReservationResourceDto} and HTTP response
     */

  }, {
    key: "updateReservationWithHttpInfo",
    value: function updateReservationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['reservationResourceDto'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ReservationResourceDto["default"];
      return this.apiClient.callApi('/rms/reservations', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 予約を更新する
     * 依頼された予約を更新する。ユーザアカウントとレンタル品のエンティティは更新時に使用していないためIDのみ設定すればよい
     * @param {Object} opts Optional parameters
     * @param {module:dto/ReservationResourceDto} opts.reservationResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/ReservationResourceDto}
     */

  }, {
    key: "updateReservation",
    value: function updateReservation(opts) {
      return this.updateReservationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * ユーザを更新する
     * 依頼されたユーザを更新する
     * @param {Object} opts Optional parameters
     * @param {module:dto/UserAccountResourceDto} opts.userAccountResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/UserAccountResourceDto} and HTTP response
     */

  }, {
    key: "updateUserAccountWithHttpInfo",
    value: function updateUserAccountWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/rms/users', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ユーザを更新する
     * 依頼されたユーザを更新する
     * @param {Object} opts Optional parameters
     * @param {module:dto/UserAccountResourceDto} opts.userAccountResourceDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/UserAccountResourceDto}
     */

  }, {
    key: "updateUserAccount",
    value: function updateUserAccount(opts) {
      return this.updateUserAccountWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AdminApi;
}();

exports["default"] = AdminApi;