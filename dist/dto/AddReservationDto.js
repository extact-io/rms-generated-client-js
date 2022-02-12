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
 * The AddReservationDto model module.
 * @module dto/AddReservationDto
 * @version 1.0.0-SNAPSHOT
 */
var AddReservationDto = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddReservationDto</code>.
   * 予約登録用DTO
   * @alias module:dto/AddReservationDto
   * @param endDateTime {String} 日時型
   * @param rentalItemId {Number} 
   * @param startDateTime {String} 日時型
   * @param userAccountId {Number} 
   */
  function AddReservationDto(endDateTime, rentalItemId, startDateTime, userAccountId) {
    _classCallCheck(this, AddReservationDto);

    AddReservationDto.initialize(this, endDateTime, rentalItemId, startDateTime, userAccountId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddReservationDto, null, [{
    key: "initialize",
    value: function initialize(obj, endDateTime, rentalItemId, startDateTime, userAccountId) {
      obj['endDateTime'] = endDateTime;
      obj['rentalItemId'] = rentalItemId;
      obj['startDateTime'] = startDateTime;
      obj['userAccountId'] = userAccountId;
    }
    /**
     * Constructs a <code>AddReservationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/AddReservationDto} obj Optional instance to populate.
     * @return {module:dto/AddReservationDto} The populated <code>AddReservationDto</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddReservationDto();

        if (data.hasOwnProperty('endDateTime')) {
          obj['endDateTime'] = _ApiClient["default"].convertToType(data['endDateTime'], 'String');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('rentalItemId')) {
          obj['rentalItemId'] = _ApiClient["default"].convertToType(data['rentalItemId'], 'Number');
        }

        if (data.hasOwnProperty('startDateTime')) {
          obj['startDateTime'] = _ApiClient["default"].convertToType(data['startDateTime'], 'String');
        }

        if (data.hasOwnProperty('userAccountId')) {
          obj['userAccountId'] = _ApiClient["default"].convertToType(data['userAccountId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AddReservationDto;
}();
/**
 * 日時型
 * @member {String} endDateTime
 */


AddReservationDto.prototype['endDateTime'] = undefined;
/**
 * @member {String} note
 */

AddReservationDto.prototype['note'] = undefined;
/**
 * @member {Number} rentalItemId
 */

AddReservationDto.prototype['rentalItemId'] = undefined;
/**
 * 日時型
 * @member {String} startDateTime
 */

AddReservationDto.prototype['startDateTime'] = undefined;
/**
 * @member {Number} userAccountId
 */

AddReservationDto.prototype['userAccountId'] = undefined;
var _default = AddReservationDto;
exports["default"] = _default;