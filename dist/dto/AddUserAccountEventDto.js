"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _UserType = _interopRequireDefault(require("./UserType"));
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
 * The AddUserAccountEventDto model module.
 * @module dto/AddUserAccountEventDto
 * @version 2.0.0
 */
var AddUserAccountEventDto = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddUserAccountEventDto</code>.
   * ユーザ登録用DTO
   * @alias module:dto/AddUserAccountEventDto
   * @param loginId {String} 
   * @param password {String} 
   * @param userName {String} 
   * @param userType {module:dto/UserType} 
   */
  function AddUserAccountEventDto(loginId, password, userName, userType) {
    _classCallCheck(this, AddUserAccountEventDto);
    AddUserAccountEventDto.initialize(this, loginId, password, userName, userType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddUserAccountEventDto, null, [{
    key: "initialize",
    value: function initialize(obj, loginId, password, userName, userType) {
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
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddUserAccountEventDto();
        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _ApiClient["default"].convertToType(data['contact'], 'String');
        }
        if (data.hasOwnProperty('loginId')) {
          obj['loginId'] = _ApiClient["default"].convertToType(data['loginId'], 'String');
        }
        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }
        if (data.hasOwnProperty('userName')) {
          obj['userName'] = _ApiClient["default"].convertToType(data['userName'], 'String');
        }
        if (data.hasOwnProperty('userType')) {
          obj['userType'] = _UserType["default"].constructFromObject(data['userType']);
        }
      }
      return obj;
    }
  }]);
  return AddUserAccountEventDto;
}();
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
var _default = AddUserAccountEventDto;
exports["default"] = _default;