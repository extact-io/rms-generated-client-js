"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
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
/**
 * The AddReservationEventDto model module.
 * @module dto/AddReservationEventDto
 * @version 2.0.0
 */
var AddReservationEventDto = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddReservationEventDto</code>.
   * 予約登録用DTO
   * @alias module:dto/AddReservationEventDto
   * @param endDateTime {String} 日時型フォーマット
   * @param rentalItemId {Number} 
   * @param startDateTime {String} 日時型フォーマット
   * @param userAccountId {Number} 
   */
  function AddReservationEventDto(endDateTime, rentalItemId, startDateTime, userAccountId) {
    _classCallCheck(this, AddReservationEventDto);
    AddReservationEventDto.initialize(this, endDateTime, rentalItemId, startDateTime, userAccountId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddReservationEventDto, null, [{
    key: "initialize",
    value: function initialize(obj, endDateTime, rentalItemId, startDateTime, userAccountId) {
      obj['endDateTime'] = endDateTime;
      obj['rentalItemId'] = rentalItemId;
      obj['startDateTime'] = startDateTime;
      obj['userAccountId'] = userAccountId;
    }

    /**
     * Constructs a <code>AddReservationEventDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/AddReservationEventDto} obj Optional instance to populate.
     * @return {module:dto/AddReservationEventDto} The populated <code>AddReservationEventDto</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddReservationEventDto();
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
  return AddReservationEventDto;
}();
/**
 * 日時型フォーマット
 * @member {String} endDateTime
 */
AddReservationEventDto.prototype['endDateTime'] = undefined;

/**
 * @member {String} note
 */
AddReservationEventDto.prototype['note'] = undefined;

/**
 * @member {Number} rentalItemId
 */
AddReservationEventDto.prototype['rentalItemId'] = undefined;

/**
 * 日時型フォーマット
 * @member {String} startDateTime
 */
AddReservationEventDto.prototype['startDateTime'] = undefined;

/**
 * @member {Number} userAccountId
 */
AddReservationEventDto.prototype['userAccountId'] = undefined;
var _default = AddReservationEventDto;
exports["default"] = _default;