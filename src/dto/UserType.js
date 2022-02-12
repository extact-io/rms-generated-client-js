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
/**
* Enum class UserType.
* @enum {}
* @readonly
*/
export default class UserType {
    
        /**
         * value: "ADMIN"
         * @const
         */
        "ADMIN" = "ADMIN";

    
        /**
         * value: "MEMBER"
         * @const
         */
        "MEMBER" = "MEMBER";

    

    /**
    * Returns a <code>UserType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:dto/UserType} The enum <code>UserType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

