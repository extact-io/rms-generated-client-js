"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The RentalItemResourceDto model module.
 * @module dto/RentalItemResourceDto
 * @version 1.0.0
 */
var RentalItemResourceDto = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RentalItemResourceDto</code>.
   * レンタル品DTO
   * @alias module:dto/RentalItemResourceDto
   * @param id {Number} 
   * @param serialNo {String} 
   */
  function RentalItemResourceDto(id, serialNo) {
    _classCallCheck(this, RentalItemResourceDto);

    RentalItemResourceDto.initialize(this, id, serialNo);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RentalItemResourceDto, null, [{
    key: "initialize",
    value: function initialize(obj, id, serialNo) {
      obj['id'] = id;
      obj['serialNo'] = serialNo;
    }
    /**
     * Constructs a <code>RentalItemResourceDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/RentalItemResourceDto} obj Optional instance to populate.
     * @return {module:dto/RentalItemResourceDto} The populated <code>RentalItemResourceDto</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RentalItemResourceDto();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('itemName')) {
          obj['itemName'] = _ApiClient["default"].convertToType(data['itemName'], 'String');
        }

        if (data.hasOwnProperty('serialNo')) {
          obj['serialNo'] = _ApiClient["default"].convertToType(data['serialNo'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RentalItemResourceDto;
}();
/**
 * @member {Number} id
 */


RentalItemResourceDto.prototype['id'] = undefined;
/**
 * @member {String} itemName
 */

RentalItemResourceDto.prototype['itemName'] = undefined;
/**
 * @member {String} serialNo
 */

RentalItemResourceDto.prototype['serialNo'] = undefined;
var _default = RentalItemResourceDto;
exports["default"] = _default;