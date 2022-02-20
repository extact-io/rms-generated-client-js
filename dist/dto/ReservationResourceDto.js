"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RentalItemResourceDto = _interopRequireDefault(require("./RentalItemResourceDto"));

var _UserAccountResourceDto = _interopRequireDefault(require("./UserAccountResourceDto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReservationResourceDto model module.
 * @module dto/ReservationResourceDto
 * @version 1.0.0
 */
var ReservationResourceDto = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReservationResourceDto</code>.
   * 予約DTO
   * @alias module:dto/ReservationResourceDto
   * @param endDateTime {String} 日時型
   * @param id {Number} 
   * @param rentalItemId {Number} 
   * @param startDateTime {String} 日時型
   * @param userAccountId {Number} 
   */
  function ReservationResourceDto(endDateTime, id, rentalItemId, startDateTime, userAccountId) {
    _classCallCheck(this, ReservationResourceDto);

    ReservationResourceDto.initialize(this, endDateTime, id, rentalItemId, startDateTime, userAccountId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservationResourceDto, null, [{
    key: "initialize",
    value: function initialize(obj, endDateTime, id, rentalItemId, startDateTime, userAccountId) {
      obj['endDateTime'] = endDateTime;
      obj['id'] = id;
      obj['rentalItemId'] = rentalItemId;
      obj['startDateTime'] = startDateTime;
      obj['userAccountId'] = userAccountId;
    }
    /**
     * Constructs a <code>ReservationResourceDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/ReservationResourceDto} obj Optional instance to populate.
     * @return {module:dto/ReservationResourceDto} The populated <code>ReservationResourceDto</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservationResourceDto();

        if (data.hasOwnProperty('endDateTime')) {
          obj['endDateTime'] = _ApiClient["default"].convertToType(data['endDateTime'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('rentalItemDto')) {
          obj['rentalItemDto'] = _RentalItemResourceDto["default"].constructFromObject(data['rentalItemDto']);
        }

        if (data.hasOwnProperty('rentalItemId')) {
          obj['rentalItemId'] = _ApiClient["default"].convertToType(data['rentalItemId'], 'Number');
        }

        if (data.hasOwnProperty('startDateTime')) {
          obj['startDateTime'] = _ApiClient["default"].convertToType(data['startDateTime'], 'String');
        }

        if (data.hasOwnProperty('userAccountDto')) {
          obj['userAccountDto'] = _UserAccountResourceDto["default"].constructFromObject(data['userAccountDto']);
        }

        if (data.hasOwnProperty('userAccountId')) {
          obj['userAccountId'] = _ApiClient["default"].convertToType(data['userAccountId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReservationResourceDto;
}();
/**
 * 日時型
 * @member {String} endDateTime
 */


ReservationResourceDto.prototype['endDateTime'] = undefined;
/**
 * @member {Number} id
 */

ReservationResourceDto.prototype['id'] = undefined;
/**
 * @member {String} note
 */

ReservationResourceDto.prototype['note'] = undefined;
/**
 * @member {module:dto/RentalItemResourceDto} rentalItemDto
 */

ReservationResourceDto.prototype['rentalItemDto'] = undefined;
/**
 * @member {Number} rentalItemId
 */

ReservationResourceDto.prototype['rentalItemId'] = undefined;
/**
 * 日時型
 * @member {String} startDateTime
 */

ReservationResourceDto.prototype['startDateTime'] = undefined;
/**
 * @member {module:dto/UserAccountResourceDto} userAccountDto
 */

ReservationResourceDto.prototype['userAccountDto'] = undefined;
/**
 * @member {Number} userAccountId
 */

ReservationResourceDto.prototype['userAccountId'] = undefined;
var _default = ReservationResourceDto;
exports["default"] = _default;