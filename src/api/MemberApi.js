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
import AddReservationDto from '../dto/AddReservationDto';
import GenericErrorInfo from '../dto/GenericErrorInfo';
import RentalItemResourceDto from '../dto/RentalItemResourceDto';
import ReservationResourceDto from '../dto/ReservationResourceDto';
import ValidationErrorInfo from '../dto/ValidationErrorInfo';

/**
* Member service.
* @module api/MemberApi
* @version 0.0.1-SNAPSHOT
*/
export default class MemberApi {

    /**
    * Constructs a new MemberApi. 
    * @alias module:api/MemberApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * レンタル品を予約する
     * 予約対象のレンタル品が存在しない場合は404を予定期間に別の予約が既に入っている場合は409を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/AddReservationDto} opts.addReservationDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dto/ReservationResourceDto} and HTTP response
     */
    addReservationWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addReservationDto'];

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
      let returnType = ReservationResourceDto;
      return this.apiClient.callApi(
        '/rms/reservations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * レンタル品を予約する
     * 予約対象のレンタル品が存在しない場合は404を予定期間に別の予約が既に入っている場合は409を返す
     * @param {Object} opts Optional parameters
     * @param {module:dto/AddReservationDto} opts.addReservationDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dto/ReservationResourceDto}
     */
    addReservation(opts) {
      return this.addReservationWithHttpInfo(opts)
        .then(function(response_and_data) {
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
    canRentedItemAtTermWithHttpInfo(rentalItemId, from, to) {
      let postBody = null;
      // verify the required parameter 'rentalItemId' is set
      if (rentalItemId === undefined || rentalItemId === null) {
        throw new Error("Missing the required parameter 'rentalItemId' when calling canRentedItemAtTerm");
      }
      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling canRentedItemAtTerm");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling canRentedItemAtTerm");
      }

      let pathParams = {
        'rentalItemId': rentalItemId
      };
      let queryParams = {
        'from': from,
        'to': to
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['RmsJwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/rms/items/{rentalItemId}/rentable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * レンタル品が該当期間に予約可能かを返す
     * レンタル品が該当期間に予約可能かを返す
     * @param {Number} rentalItemId レンタル品ID
     * @param {String} from 利用開始日時
     * @param {String} to 利用開始日時
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    canRentedItemAtTerm(rentalItemId, from, to) {
      return this.canRentedItemAtTermWithHttpInfo(rentalItemId, from, to)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 予約をキャンセルする
     * 依頼された予約IDに対する予約をキャンセルする。予約のキャンセルは予約した人しか行えない。他の人が予約キャンセルを行った場合は禁止操作としてエラーにする
     * @param {Number} reservationId 予約ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelReservationWithHttpInfo(reservationId) {
      let postBody = null;
      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling cancelReservation");
      }

      let pathParams = {
        'reservationId': reservationId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/rms/reservations/own/{reservationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 予約をキャンセルする
     * 依頼された予約IDに対する予約をキャンセルする。予約のキャンセルは予約した人しか行えない。他の人が予約キャンセルを行った場合は禁止操作としてエラーにする
     * @param {Number} reservationId 予約ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cancelReservation(reservationId) {
      return this.cancelReservationWithHttpInfo(reservationId)
        .then(function(response_and_data) {
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
    findCanRentedItemAtTermWithHttpInfo(from, to) {
      let postBody = null;
      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling findCanRentedItemAtTerm");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling findCanRentedItemAtTerm");
      }

      let pathParams = {
      };
      let queryParams = {
        'from': from,
        'to': to
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['RmsJwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [RentalItemResourceDto];
      return this.apiClient.callApi(
        '/rms/items/rentable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 該当期間に予約可能なレンタル品を検索する
     * 該当期間に予約可能なレンタル品を検索する
     * @param {String} from 利用開始日時
     * @param {String} to 利用開始日時
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/RentalItemResourceDto>}
     */
    findCanRentedItemAtTerm(from, to) {
      return this.findCanRentedItemAtTermWithHttpInfo(from, to)
        .then(function(response_and_data) {
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
    findReservationByRentalItemAndStartDateWithHttpInfo(itemId, startDate) {
      let postBody = null;
      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling findReservationByRentalItemAndStartDate");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling findReservationByRentalItemAndStartDate");
      }

      let pathParams = {
        'itemId': itemId,
        'startDate': startDate
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
      let returnType = [ReservationResourceDto];
      return this.apiClient.callApi(
        '/rms/reservations/item/{itemId}/startdate/{startDate}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 指定されたレンタル品と利用開始日で予約を検索する
     * 指定されたレンタル品と利用開始日に一致する予約を検索する
     * @param {Number} itemId レンタル品ID
     * @param {String} startDate 利用開始日
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */
    findReservationByRentalItemAndStartDate(itemId, startDate) {
      return this.findReservationByRentalItemAndStartDateWithHttpInfo(itemId, startDate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 指定されたレンタル品に対する予約を検索する
     * 指定されたレンタル品に対する予約を検索する
     * @param {Number} rentalItemId レンタル品ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */
    findReservationByRentalItemIdWithHttpInfo(rentalItemId) {
      let postBody = null;
      // verify the required parameter 'rentalItemId' is set
      if (rentalItemId === undefined || rentalItemId === null) {
        throw new Error("Missing the required parameter 'rentalItemId' when calling findReservationByRentalItemId");
      }

      let pathParams = {
        'rentalItemId': rentalItemId
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
      let returnType = [ReservationResourceDto];
      return this.apiClient.callApi(
        '/rms/reservations/item/{rentalItemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 指定されたレンタル品に対する予約を検索する
     * 指定されたレンタル品に対する予約を検索する
     * @param {Number} rentalItemId レンタル品ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */
    findReservationByRentalItemId(rentalItemId) {
      return this.findReservationByRentalItemIdWithHttpInfo(rentalItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 指定されたユーザが予約者の予約を検索する
     * 指定されたユーザが予約者の予約を検索する
     * @param {Number} reserverId ユーザID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */
    findReservationByReserverIdWithHttpInfo(reserverId) {
      let postBody = null;
      // verify the required parameter 'reserverId' is set
      if (reserverId === undefined || reserverId === null) {
        throw new Error("Missing the required parameter 'reserverId' when calling findReservationByReserverId");
      }

      let pathParams = {
        'reserverId': reserverId
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
      let returnType = [ReservationResourceDto];
      return this.apiClient.callApi(
        '/rms/reservations/reserver/{reserverId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 指定されたユーザが予約者の予約を検索する
     * 指定されたユーザが予約者の予約を検索する
     * @param {Number} reserverId ユーザID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */
    findReservationByReserverId(reserverId) {
      return this.findReservationByReserverIdWithHttpInfo(reserverId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * レンタル品の全件を取得する
     * 登録されているすべてのレンタル品を取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/RentalItemResourceDto>} and HTTP response
     */
    getAllRentalItemsWithHttpInfo() {
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
      let returnType = [RentalItemResourceDto];
      return this.apiClient.callApi(
        '/rms/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * レンタル品の全件を取得する
     * 登録されているすべてのレンタル品を取得する
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/RentalItemResourceDto>}
     */
    getAllRentalItems() {
      return this.getAllRentalItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 自分の予約一覧を取得する
     * ログインユーザが予約者となっている予約の一覧を取得する。このAPIは/reservations/reserver/{reserverId}のエイリアスとなっている
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:dto/ReservationResourceDto>} and HTTP response
     */
    getOwnReservationsWithHttpInfo() {
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
      let returnType = [ReservationResourceDto];
      return this.apiClient.callApi(
        '/rms/reservations/own', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 自分の予約一覧を取得する
     * ログインユーザが予約者となっている予約の一覧を取得する。このAPIは/reservations/reserver/{reserverId}のエイリアスとなっている
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:dto/ReservationResourceDto>}
     */
    getOwnReservations() {
      return this.getOwnReservationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
