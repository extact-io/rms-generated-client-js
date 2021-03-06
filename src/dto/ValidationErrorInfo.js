/**
 * レンタル予約システムの公開API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ValidationErrorItem from './ValidationErrorItem';

/**
 * The ValidationErrorInfo model module.
 * @module dto/ValidationErrorInfo
 * @version 1.0.0
 */
class ValidationErrorInfo {
    /**
     * Constructs a new <code>ValidationErrorInfo</code>.
     * パラメータチェックエラー情報
     * @alias module:dto/ValidationErrorInfo
     */
    constructor() { 
        
        ValidationErrorInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidationErrorInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/ValidationErrorInfo} obj Optional instance to populate.
     * @return {module:dto/ValidationErrorInfo} The populated <code>ValidationErrorInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationErrorInfo();

            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('errorReason')) {
                obj['errorReason'] = ApiClient.convertToType(data['errorReason'], 'String');
            }
            if (data.hasOwnProperty('errorItems')) {
                obj['errorItems'] = ApiClient.convertToType(data['errorItems'], [ValidationErrorItem]);
            }
        }
        return obj;
    }


}

/**
 * 発生した例外に設定されていたメッセージ
 * @member {String} errorMessage
 */
ValidationErrorInfo.prototype['errorMessage'] = undefined;

/**
 * エラー理由として発生した例外のクラス名を設定
 * @member {String} errorReason
 */
ValidationErrorInfo.prototype['errorReason'] = undefined;

/**
 * @member {Array.<module:dto/ValidationErrorItem>} errorItems
 */
ValidationErrorInfo.prototype['errorItems'] = undefined;






export default ValidationErrorInfo;

