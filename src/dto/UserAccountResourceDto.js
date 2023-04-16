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
 * The UserAccountResourceDto model module.
 * @module dto/UserAccountResourceDto
 * @version 2.0.0
 */
class UserAccountResourceDto {
    /**
     * Constructs a new <code>UserAccountResourceDto</code>.
     * ユーザDTO
     * @alias module:dto/UserAccountResourceDto
     * @param id {Number} 
     * @param loginId {String} 
     * @param password {String} 
     * @param userType {module:dto/UserType} 
     */
    constructor(id, loginId, password, userType) { 
        
        UserAccountResourceDto.initialize(this, id, loginId, password, userType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, loginId, password, userType) { 
        obj['id'] = id;
        obj['loginId'] = loginId;
        obj['password'] = password;
        obj['userType'] = userType;
    }

    /**
     * Constructs a <code>UserAccountResourceDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/UserAccountResourceDto} obj Optional instance to populate.
     * @return {module:dto/UserAccountResourceDto} The populated <code>UserAccountResourceDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAccountResourceDto();

            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('userPrincipalName')) {
                obj['userPrincipalName'] = ApiClient.convertToType(data['userPrincipalName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} contact
 */
UserAccountResourceDto.prototype['contact'] = undefined;

/**
 * @member {Number} id
 */
UserAccountResourceDto.prototype['id'] = undefined;

/**
 * @member {String} loginId
 */
UserAccountResourceDto.prototype['loginId'] = undefined;

/**
 * @member {String} password
 */
UserAccountResourceDto.prototype['password'] = undefined;

/**
 * @member {String} phoneNumber
 */
UserAccountResourceDto.prototype['phoneNumber'] = undefined;

/**
 * @member {String} userName
 */
UserAccountResourceDto.prototype['userName'] = undefined;

/**
 * @member {module:dto/UserType} userType
 */
UserAccountResourceDto.prototype['userType'] = undefined;

/**
 * @member {Array.<String>} groups
 */
UserAccountResourceDto.prototype['groups'] = undefined;

/**
 * @member {String} userId
 */
UserAccountResourceDto.prototype['userId'] = undefined;

/**
 * @member {String} userPrincipalName
 */
UserAccountResourceDto.prototype['userPrincipalName'] = undefined;






export default UserAccountResourceDto;

