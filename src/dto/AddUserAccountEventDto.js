/**
 * レンタル予約システム公開API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: -
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
 * The AddUserAccountEventDto model module.
 * @module dto/AddUserAccountEventDto
 * @version 2.0.0
 */
class AddUserAccountEventDto {
    /**
     * Constructs a new <code>AddUserAccountEventDto</code>.
     * ユーザ登録用DTO
     * @alias module:dto/AddUserAccountEventDto
     * @param loginId {String} 
     * @param password {String} 
     * @param userName {String} 
     * @param userType {module:dto/UserType} 
     */
    constructor(loginId, password, userName, userType) { 
        
        AddUserAccountEventDto.initialize(this, loginId, password, userName, userType);
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
     * Constructs a <code>AddUserAccountEventDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/AddUserAccountEventDto} obj Optional instance to populate.
     * @return {module:dto/AddUserAccountEventDto} The populated <code>AddUserAccountEventDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddUserAccountEventDto();

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
AddUserAccountEventDto.prototype['contact'] = undefined;

/**
 * @member {String} loginId
 */
AddUserAccountEventDto.prototype['loginId'] = undefined;

/**
 * @member {String} password
 */
AddUserAccountEventDto.prototype['password'] = undefined;

/**
 * @member {String} phoneNumber
 */
AddUserAccountEventDto.prototype['phoneNumber'] = undefined;

/**
 * @member {String} userName
 */
AddUserAccountEventDto.prototype['userName'] = undefined;

/**
 * @member {module:dto/UserType} userType
 */
AddUserAccountEventDto.prototype['userType'] = undefined;






export default AddUserAccountEventDto;

