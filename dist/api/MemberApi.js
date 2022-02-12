"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddReservationDto = _interopRequireDefault(require("../dto/AddReservationDto"));

var _GenericErrorInfo = _interopRequireDefault(require("../dto/GenericErrorInfo"));

var _RentalItemResourceDto = _interopRequireDefault(require("../dto/RentalItemResourceDto"));

var _ReservationResourceDto = _interopRequireDefault(require("../dto/ReservationResourceDto"));

var _ValidationErrorInfo = _interopRequireDefault(require("../dto/ValidationErrorInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Member service.
* @module api/MemberApi
* @version 0.0.1-SNAPSHOT
*/
var MemberApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MemberApi. 
  * @alias module:api/MemberApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MemberApi(apiClient) {
    _classCallCheck(this, MemberApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * レンタル品を予約する
   * 予約対象のレンタル品が存在しない場合は404を予定期間に別の予約が既に入っている場合は409を返す
   * @param {Object} opts Optional parameters
   * @param {module:dto/AddReservationDto} opts.addReservationDto 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/ReservationResourceDto} and HTTP response
   */


  _createClass(MemberApi, [{
    key: "addReservationWithHttpInfo",
    value: function addReservationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['addReservationDto'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ReservationResourceDto["default"];
      return this.apiClient.callApi('/rms/reservations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * レンタル品を予約する
     * 予約対象のレンタル品が存在しない場合は404を予定期間に別の予約が既に入っている場合は409を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/AddReservationDto} opts.addReservationDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/ReservationResourceDto}
     */

  }, {
    key: "addReservation",
    value: function addReservation(opts) {
      return this.addReservationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * レンタル品が該当期間に予約可能かを返す
     * レンタル品が該当期間に予約可能かを返す
     * @param {Number} rentalItemId レンタル品ID
     * @param {String} from 利用開始日時
     * @param {String} to 利用開始日時
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */

  }, {
    key: "canRentedItemAtTermWithHttpInfo",
    value: function canRentedItemAtTermWithHttpInfo(rentalItemId, from, to) {
      var postBody = null; // verify the required parameter 'rentalItemId' is set

      if (rentalItemId === undefined || rentalItemId === null) {
        throw new Error("Missing the required parameter 'rentalItemId' when calling canRentedItemAtTerm");
      } // verify the required parameter 'from' is set


      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling canRentedItemAtTerm");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling canRentedItemAtTerm");
      }

      var pathParams = {
        'rentalItemId': rentalItemId
      };
      var queryParams = {
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Boolean';
      return this.apiClient.callApi('/rms/items/{rentalItemId}/rentable', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * レンタル品が該当期間に予約可能かを返す
     * レンタル品が該当期間に予約可能かを返す
     * @param {Number} rentalItemId レンタル品ID
     * @param {String} from 利用開始日時
     * @param {String} to 利用開始日時
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */

  }, {
    key: "canRentedItemAtTerm",
    value: function canRentedItemAtTerm(rentalItemId, from, to) {
      return this.canRentedItemAtTermWithHttpInfo(rentalItemId, from, to).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 予約をキャンセルする
     * 依頼された予約IDに対する予約をキャンセルする。予約のキャンセルは予約した人しか行えない。他の人が予約キャンセルを行った場合は禁止操作としてエラーにする
     * @param {Number} reservationId 予約ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "cancelReservationWithHttpInfo",
    value: function cancelReservationWithHttpInfo(reservationId) {
      var postBody = null; // verify the required parameter 'reservationId' is set

      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling cancelReservation");
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
      return this.apiClient.callApi('/rms/reservations/own/{reservationId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 予約をキャンセルする
     * 依頼された予約IDに対する予約をキャンセルする。予約のキャンセルは予約した人しか行えない。他の人が予約キャンセルを行った場合は禁止操作としてエラーにする
     * @param {Number} reservationId 予約ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "cancelReservation",
    value: function cancelReservation(reservationId) {
      return this.cancelReservationWithHttpInfo(reservationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 該当期間に予約可能なレンタル品を検索する
     * 該当期間に予約可能なレンタル品を検索する
     * @param {String} from 利用開始日時
     * @param {String} to 利用開始日時
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/RentalItemResourceDto>} and HTTP response
     */

  }, {
    key: "findCanRentedItemAtTermWithHttpInfo",
    value: function findCanRentedItemAtTermWithHttpInfo(from, to) {
      var postBody = null; // verify the required parameter 'from' is set

      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling findCanRentedItemAtTerm");
      } // verify the required parameter 'to' is set


      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling findCanRentedItemAtTerm");
      }

      var pathParams = {};
      var queryParams = {
        'from': from,
        'to': to
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RentalItemResourceDto["default"]];
      return this.apiClient.callApi('/rms/items/rentable', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 該当期間に予約可能なレンタル品を検索する
     * 該当期間に予約可能なレンタル品を検索する
     * @param {String} from 利用開始日時
     * @param {String} to 利用開始日時
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/RentalItemResourceDto>}
     */

  }, {
    key: "findCanRentedItemAtTerm",
    value: function findCanRentedItemAtTerm(from, to) {
      return this.findCanRentedItemAtTermWithHttpInfo(from, to).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 指定されたレンタル品と利用開始日で予約を検索する
     * 指定されたレンタル品と利用開始日に一致する予約を検索する
     * @param {Number} itemId レンタル品ID
     * @param {String} startDate 利用開始日
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */

  }, {
    key: "findReservationByRentalItemAndStartDateWithHttpInfo",
    value: function findReservationByRentalItemAndStartDateWithHttpInfo(itemId, startDate) {
      var postBody = null; // verify the required parameter 'itemId' is set

      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling findReservationByRentalItemAndStartDate");
      } // verify the required parameter 'startDate' is set


      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling findReservationByRentalItemAndStartDate");
      }

      var pathParams = {
        'itemId': itemId,
        'startDate': startDate
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ReservationResourceDto["default"]];
      return this.apiClient.callApi('/rms/reservations/item/{itemId}/startdate/{startDate}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 指定されたレンタル品と利用開始日で予約を検索する
     * 指定されたレンタル品と利用開始日に一致する予約を検索する
     * @param {Number} itemId レンタル品ID
     * @param {String} startDate 利用開始日
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */

  }, {
    key: "findReservationByRentalItemAndStartDate",
    value: function findReservationByRentalItemAndStartDate(itemId, startDate) {
      return this.findReservationByRentalItemAndStartDateWithHttpInfo(itemId, startDate).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 指定されたレンタル品に対する予約を検索する
     * 指定されたレンタル品に対する予約を検索する
     * @param {Number} rentalItemId レンタル品ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */

  }, {
    key: "findReservationByRentalItemIdWithHttpInfo",
    value: function findReservationByRentalItemIdWithHttpInfo(rentalItemId) {
      var postBody = null; // verify the required parameter 'rentalItemId' is set

      if (rentalItemId === undefined || rentalItemId === null) {
        throw new Error("Missing the required parameter 'rentalItemId' when calling findReservationByRentalItemId");
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
      var returnType = [_ReservationResourceDto["default"]];
      return this.apiClient.callApi('/rms/reservations/item/{rentalItemId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 指定されたレンタル品に対する予約を検索する
     * 指定されたレンタル品に対する予約を検索する
     * @param {Number} rentalItemId レンタル品ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */

  }, {
    key: "findReservationByRentalItemId",
    value: function findReservationByRentalItemId(rentalItemId) {
      return this.findReservationByRentalItemIdWithHttpInfo(rentalItemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 指定されたユーザが予約者の予約を検索する
     * 指定されたユーザが予約者の予約を検索する
     * @param {Number} reserverId ユーザID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */

  }, {
    key: "findReservationByReserverIdWithHttpInfo",
    value: function findReservationByReserverIdWithHttpInfo(reserverId) {
      var postBody = null; // verify the required parameter 'reserverId' is set

      if (reserverId === undefined || reserverId === null) {
        throw new Error("Missing the required parameter 'reserverId' when calling findReservationByReserverId");
      }

      var pathParams = {
        'reserverId': reserverId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ReservationResourceDto["default"]];
      return this.apiClient.callApi('/rms/reservations/reserver/{reserverId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 指定されたユーザが予約者の予約を検索する
     * 指定されたユーザが予約者の予約を検索する
     * @param {Number} reserverId ユーザID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */

  }, {
    key: "findReservationByReserverId",
    value: function findReservationByReserverId(reserverId) {
      return this.findReservationByReserverIdWithHttpInfo(reserverId).then(function (response_and_data) {
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
     * 自分の予約一覧を取得する
     * ログインユーザが予約者となっている予約の一覧を取得する。このAPIは/reservations/reserver/{reserverId}のエイリアスとなっている
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */

  }, {
    key: "getOwnReservationsWithHttpInfo",
    value: function getOwnReservationsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['RmsJwtAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ReservationResourceDto["default"]];
      return this.apiClient.callApi('/rms/reservations/own', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 自分の予約一覧を取得する
     * ログインユーザが予約者となっている予約の一覧を取得する。このAPIは/reservations/reserver/{reserverId}のエイリアスとなっている
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */

  }, {
    key: "getOwnReservations",
    value: function getOwnReservations() {
      return this.getOwnReservationsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MemberApi;
}();

exports["default"] = MemberApi;