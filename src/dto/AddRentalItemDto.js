/**
 * レンタル予約システムの公開API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AddRentalItemDto model module.
 * @module dto/AddRentalItemDto
 * @version 1.0.0-SNAPSHOT
 */
class AddRentalItemDto {
    /**
     * Constructs a new <code>AddRentalItemDto</code>.
     * レンタル品登録用DTO
     * @alias module:dto/AddRentalItemDto
     * @param serialNo {String} 
     */
    constructor(serialNo) { 
        
        AddRentalItemDto.initialize(this, serialNo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, serialNo) { 
        obj['serialNo'] = serialNo;
    }

    /**
     * Constructs a <code>AddRentalItemDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/AddRentalItemDto} obj Optional instance to populate.
     * @return {module:dto/AddRentalItemDto} The populated <code>AddRentalItemDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddRentalItemDto();

            if (data.hasOwnProperty('itemName')) {
                obj['itemName'] = ApiClient.convertToType(data['itemName'], 'String');
            }
            if (data.hasOwnProperty('serialNo')) {
                obj['serialNo'] = ApiClient.convertToType(data['serialNo'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} itemName
 */
AddRentalItemDto.prototype['itemName'] = undefined;

/**
 * @member {String} serialNo
 */
AddRentalItemDto.prototype['serialNo'] = undefined;






export default AddRentalItemDto;

