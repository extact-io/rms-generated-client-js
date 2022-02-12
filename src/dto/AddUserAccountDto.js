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

import ApiClient from '../ApiClient';
import UserType from './UserType';

/**
 * The AddUserAccountDto model module.
 * @module dto/AddUserAccountDto
 * @version 0.0.1-SNAPSHOT
 */
class AddUserAccountDto {
    /**
     * Constructs a new <code>AddUserAccountDto</code>.
     * ユーザ登録用DTO
     * @alias module:dto/AddUserAccountDto
     * @param loginId {String} 
     * @param password {String} 
     * @param userName {String} 
     * @param userType {module:dto/UserType} 
     */
    constructor(loginId, password, userName, userType) { 
        
        AddUserAccountDto.initialize(this, loginId, password, userName, userType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, loginId, password, userName, userType) { 
        obj['loginId'] = loginId;
        obj['password'] = password;
        obj['userName'] = userName;
        obj['userType'] = userType;
    }

    /**
     * Constructs a <code>AddUserAccountDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/AddUserAccountDto} obj Optional instance to populate.
     * @return {module:dto/AddUserAccountDto} The populated <code>AddUserAccountDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddUserAccountDto();

            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('loginId')) {
                obj['loginId'] = ApiClient.convertToType(data['loginId'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('userType')) {
                obj['userType'] = UserType.constructFromObject(data['userType']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} contact
 */
AddUserAccountDto.prototype['contact'] = undefined;

/**
 * @member {String} loginId
 */
AddUserAccountDto.prototype['loginId'] = undefined;

/**
 * @member {String} password
 */
AddUserAccountDto.prototype['password'] = undefined;

/**
 * @member {String} phoneNumber
 */
AddUserAccountDto.prototype['phoneNumber'] = undefined;

/**
 * @member {String} userName
 */
AddUserAccountDto.prototype['userName'] = undefined;

/**
 * @member {module:dto/UserType} userType
 */
AddUserAccountDto.prototype['userType'] = undefined;






export default AddUserAccountDto;
